// Component implementing a login screen
import {
    StyleSheet,
    SafeAreaView,
    ScrollView, Pressable, Dimensions, Alert,
} from 'react-native';
import React, {useState, useEffect} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {db, auth, getDocs, collection, doc, updateDoc} from "../firebaseConfig";
import {Button, Text, TextInput, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from "./Login";
import FirstScreen from "./FirstScreen";
//firebase

// icons
import {AntDesign, MaterialIcons, Entypo} from "@expo/vector-icons";





// shopping object
const AddScreen = () => {
//function AddScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userList, setUserList] = useState([]);
    const [userID,set_userID] = useState("");
    const getUserList = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "class"));
            setUserList(
                querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            );
            //console.log(userList);
        }catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    useEffect(() => {
        getUserList();
    }, []);

    const addUser = async () => {
        try {
            if (username !== "" && password) {
                const docRef = await addDoc(collection(db, "class"), {
                    username: username,
                    password: password,
                });
                console.log("Document written with ID: ", docRef.id);
                setUsername("");
                setPassword("");

            }
            else{
                Alert.alert('ERROR', "All fields are required");
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        //kalles etter at en ny eleve addes, skal oppdatere men gjør ikke det!
        getUserList();
    };



    return (
        <View>
            <View style={styles.inputs}>
                {/* Text Input fName */}
                <TextInput
                    placeholder="Enter Email"
                    style={styles.input}
                    value={username}
                    onChangeText={text => setUsername(text)}
                    onSubmitEditing={addUser}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={addUser}
                />

            </View>
        </View>
    );
}

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //marginTop: 45,
        //alignItems: 'center',
        //justifyContent: 'center',
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
        //backgroundColor: "red",
        fontWeight: "500",
        flex: 1,
    },
    input: {
        color: "white",
        fontSize: 17,
        backgroundColor: "steelblue",
        padding: 10,
        width: "100%",
        alignSelf: "center",
        borderRadius: 0,
        //automatically sticks to the bottom
        flexDirection: "row",
        borderStyle: "solid",
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    }
});
