import {Button, Pressable, StyleSheet, Text, View, TextInput} from "react-native";
import React, { useState, useEffect} from "react";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons} from '@expo/vector-icons';
import { db, doc, updateDoc, deleteDoc } from "../firebaseConfig"


const TodoItem = (props) => {
    const [isChecked, setIsChecked] = useState(props.isChecked);

    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(props.title);
    const updateIsChecked = async () => {
        const taskRef = doc(db, "todo", props.id);

// Set the "capital" field of the city 'DC'
        await updateDoc(taskRef, {
            isChecked: isChecked,
        });
    };
    const deleteTodoItem = async () => {
        await deleteDoc(doc(db, "todo", props.id));
        props.getTodoList();
    };

    const handleEditButton = () => {
        setIsEditing(true);
    };

    const handleSaveButton = async () => {
        const todoRef = doc(db, "todo", props.id);
        await updateDoc(todoRef, {
            title: updatedTitle,
            // Add other fields to update as needed
        });
        setIsEditing(false);
        props.getTodoList();
    };

    const handleCancelButton = () => {
        setIsEditing(false);
        setUpdatedTitle(props.title);
    };

    const handleTitleChange = (text) => {
        setUpdatedTitle(text);
    };

    const editTodoItem = async () => {
        const todoRef = doc(db, "todo", props.id);
        await updateDoc(todoRef, {
            // Update the fields you want to modify
            // For example, if you want to update the title:
            title: "test",
            // Add other fields to update as needed
        });
        props.getTodoList();
    };

        useEffect(() => {
            updateIsChecked();
        },[isChecked]);
    return (
        <View style={styles.container}>
            {/* checked icon */}
            <Pressable onPress={() => setIsChecked(!isChecked)}>
                {
                    isChecked ? (
                        <AntDesign name="checkcircle" size={24} color="black" />
                    ) : (
                        <AntDesign name="checkcircleo" size={24} color="black" />
                    )
                }

            </Pressable>
            {/*editing function*/}
            {isEditing ? (
                <TextInput
                    style={styles.title}
                    value={updatedTitle}
                    onChangeText={handleTitleChange}
                />
            ) : (
                <Text style={styles.title}>{props.title}</Text>
            )}
            <View style={{flexDirection: "row"}}>
                <Pressable onPress={isEditing ? handleSaveButton : handleEditButton}>
                    <MaterialIcons name={isEditing ? "save" : "edit"} size={24} color="black"/>
                </Pressable>
                {isEditing && (
                    <Pressable onPress={handleCancelButton}>
                        <MaterialIcons name="cancel" size={24} color="black"/>
                    </Pressable>
                )}

                <Pressable onPress={deleteTodoItem}>
                    <MaterialIcons name="delete" size={24} color="black"/>
                </Pressable>
            </View>
        </View>
    );

}
export default TodoItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        flex: 1,
        margin: 10,
        fontSize: 17,
        fontWeight: "500",
    },
});