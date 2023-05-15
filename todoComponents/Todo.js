import {StyleSheet,Button, Text, SafeAreaView, View, Pressable, TextInput, FlatList, ActivityIndicator} from "react-native";
import TodoItem from "./TodoItem";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {useState, useEffect} from "react";

import { db, doc, updateDoc, deleteDoc, getDocs, collection,query, where, addDoc } from "../firebaseConfig"

import {useNavigation, useRoute} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Todo = () => {
    const navigation = useNavigation();
    const [title,setTitle] = useState("");
    const [todoList, setTodoList] = useState([]);
    const route = useRoute();
    const { userId } = route.params;
    const { userEmail } = route.params;

    console.log('User ID:', userId, userEmail); // Do something with the user ID

    const addTodoItem = async () => {
        try {
            const docRef = await addDoc(collection(db,"TodoLists", userId, "todo"), {
                title: title,
                isChecked: false,
            });

            console.log("Document written with ID: ", docRef.id);
            setTitle("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        getTodoList();
    };

    const getTodoList = async (title) => {
        console.log("getTodoList called for", title);
        try {

            const querySnapshot = await getDocs(query(collection(db,"TodoLists", userId, "todo")));
            const todoItems = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            console.log("Todo items:", todoItems); // log the todo items to check if they are being fetched correctly
            setTodoList(todoItems);
        } catch (error) {
            console.error("Error getting todo list: ", error);
        }
    };

    const DeleteTodoList = async () => {

        const querySnapshot = await getDocs(collection(db,"TodoLists", userId, "todo"));
        for (const docSnap of querySnapshot.docs) {
            const querySnapshot2 = await getDocs(collection(db,"TodoLists", userId, "todo", docSnap.id, "tasks"));
            for (const docSnap2 of querySnapshot2.docs) {
                await deleteDoc(doc(db,"TodoLists", userId, "todo", docSnap.id, "tasks", docSnap2.id));
            }
            await deleteDoc(doc(db,"TodoLists", userId, "todo", docSnap.id));
        }

        // querySnapshot.docs.map((item) => deleteDoc(doc(db,"TodoLists", userId, "todo", id)));
        getTodoList();
    }

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
        getTodoList();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* heading */}
                <Text style={styles.heading}>To-Do Lists:</Text>
                {/* no og shopping items */}
                <Text style={styles.noOfItems}>{todoList.length}</Text>
                {/* Delete all */}
                <Pressable onPress={DeleteTodoList}>
                    <MaterialIcons name="delete" size={30} color="black" />
                </Pressable>
            </View>
            {/* Flatlist */}
            {todoList.length > 0 ? (
                <FlatList
                    data={todoList}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('To-Do Task', { id: item.id, title: item.title, userId })}>
                            <TodoItem
                                title={item.title}
                                isChecked={item.isChecked}
                                id={item.id}
                                getTodoList={getTodoList}
                                userId={userId}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <ActivityIndicator />
            )}

            {/* Text Input */}
            <TextInput
                placeholder="Enter shopping item"
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
                onSubmitEditing={addTodoItem}
            />
        </SafeAreaView>
    );
};

export default Todo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        backgroundColor: '#CBCAE3',
        padding: 10,
        fontSize: 17,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "auto",
    }
});