import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    TextInput,
    FlatList,
    ActivityIndicator
} from "react-native";
import TaskItem from "./TaskItem";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import React, {useState, useEffect} from "react";
import { useRoute } from '@react-navigation/native';

import { db, doc, deleteDoc, query, getDocs, collection, addDoc } from "../firebaseConfig"



const Task = () => {
    const [title,setTitle] = useState("");
    const [taskList, setTaskList] = useState([]);
    const route = useRoute();
    const { id } = route.params;
    const { userId } = route.params;

    const addTask = async () => {
        try {
            const docRef = await addDoc(collection(db,"TodoLists", userId, "todo", id, "tasks"), {
                title: title,
                isChecked: false,
            });
            console.log("Document written with ID: ", docRef.id);
            setTitle("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        getTaskList();
    };



    const getTaskList = async (title) => {
        console.log("getTaskList called for", title);
        try {

            const querySnapshot = await getDocs(query(collection(db,"TodoLists", userId, "todo", id, "tasks")));
            const taskItems = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            console.log("Task items:", taskItems); // log the todo items to check if they are being fetched correctly
            setTaskList(taskItems);
        } catch (error) {
            console.error("Error getting task list: ", error);
        }
    };

    const DeleteTaskList = async () => {
        try {
            const querySnapshot = await getDocs(collection(db,"TodoLists", userId, "todo", id, "tasks"));
            for (const docSnap of querySnapshot.docs) {
                await deleteDoc(doc(db,"TodoLists", userId, "todo", id, "tasks", docSnap.id));
            }
            getTaskList();
        } catch (error) {
            console.error("Error deleting task list: ", error);
        }
    };



    useEffect(() => {
        getTaskList();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* heading */}
                <Text style={styles.heading}>{route.params.title}</Text>
                {/* no og shopping items */}
                <Text style={styles.noOfItems}>{taskList.length}</Text>
                {/* Delete all */}
                <Pressable onPress={DeleteTaskList}>
                    <MaterialIcons name="delete" size={30} color="black" />
                </Pressable>

            </View>
            {/* Flatlist */}
            {taskList.length > 0 ? (
                <FlatList
                    data={taskList}
                    renderItem={({item}) => (
                        <TaskItem
                            title={item.title}
                            isChecked={item.isChecked}
                            id = {item.id}
                            getTaskList={getTaskList}
                            userId={userId}
                        />
                    )}
                />
            ) : (
                <ActivityIndicator/>
            )}


            {/* Text Input */}

            <TextInput
                placeholder="Add Task"
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
                onSubmitEditing={addTask}
            />
        </SafeAreaView>
    );
};

export default Task;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    heading: {
        fontSize: 30,
        fontWeight: "500",
        flex: 1,
    },
    noOfItems: {
        fontSize: 30,
        fontWeight: "500",
        marginRight: 20,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 10,
        fontSize: 17,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "auto",
    }
});