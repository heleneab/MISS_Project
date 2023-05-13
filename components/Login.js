import React, { useState } from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, TextInput, Pressable} from 'react-native';

//Firebase
import {auth} from "../firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";



const Login = ({navigation, setUser}) => {


    const [username, setUsername] = useState("test@uia.no");
    const [password, setPassword] = useState("Password1.");

    const loginUser = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`User has been signed in: ${user.email}`);

                // Call the setter passed to us as a prop
                setUser(user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.log(`Error: ${error.code} ${error.message}`);
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }



    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    keyboardType="email-address"
                    //value="test@uia.no"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    //value="Password1."
                />

            </View>

            <Button title="Login" onPress={loginUser}/>

            <Pressable
                onPress={() => navigation.navigate('Register')}>
                <View>
                    <Text style={styles.nav_text}>Dont have a user</Text>
                </View>
            </Pressable>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    nav_text:{
        fontSize: 30,
        marginLeft: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkmark: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    agreeText: {
        fontSize: 16,
    },
    input: {
        color: "#9DBBB5",
        fontSize: 30,
        backgroundColor: "#FFFFFF",
        padding: 7,
        width: "70%",
        alignSelf: "center",
        borderRadius: 9,
        //automatically sticks to the bottom
        flexDirection: "row",
        borderStyle: "solid",
        margin: 1,
        borderWidth: 1,
        borderColor: "#9DBBB5",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 1,
        alignItems: 'center',
        //backgroundColor: '9DBBB5',
        //elevation: 0,
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    },
    baseText: {
        fontFamily: 'Cochin',


    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    underlineTextStyle: {
        textDecorationLine: 'underline',
        //line-through is the trick
    },
});

export default Login;
