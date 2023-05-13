import React, { useState } from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, TextInput, Pressable} from 'react-native';

//Firebase
import {auth} from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = ({navigation}) => {
    const [username, setUsername] = useState("test@uia.no");
    const [password, setPassword] = useState("Password1.");

    const [agree, setAgree] = useState(false);
    //for the checkbox
    const toggleAgree = () => {
        setAgree(!agree);
    };
    const handleRegister = () => {
        if (agree) {
            // Perform the registration action
            // ...
            // Show a success message or navigate to the next screen
            Alert.alert('Registration successful');
            registerUser()
            navigation.navigate('Login');
        } else {
            // Show an error message if the checkbox is not checked
            Alert.alert('Error', 'Please agree to the Privacy Policy');
        }
    };
    const registerUser = () => {
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`User has been registered: ${user.email}`);
                // ...
            })
            .catch((error) => {
                console.log(`Error: ${error.code} ${error.message}`);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    return(
        <ScrollView>
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
                {/*<Privacy/>*/}
                <Pressable onPress={() => navigation.navigate('Privacy')}>
                    <Text style={styles.linkText}>Please read our Privacy Policy.</Text>
                </Pressable>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={toggleAgree}>
                        {agree ? <Text style={styles.checkmark}>✓</Text> : null}
                    </TouchableOpacity>
                    <Text style={styles.agreeText}>I agree to the Privacy Policy</Text>
                </View>
                <Button title="Register" onPress={handleRegister} disabled={!agree} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 16,
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
        color: "#030303",
        fontSize: 25,
        backgroundColor: "#FFFFFF",
        padding: 7,
        width: "70%",
        alignSelf: "center",
        borderRadius: 10,
        //automatically sticks to the bottom
        flexDirection: "row",
        borderStyle: "solid",
        margin: 1,
        borderWidth: 2,
        borderColor: "#9DBBB5",
        marginTop:20
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
    link: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        marginLeft: 10,
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
    },
});

export default Register;