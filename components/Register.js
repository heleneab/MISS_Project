import React, { useState } from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, TextInput, Pressable} from 'react-native';

//Firebase
import {auth} from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";


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

    if(!agree) return(
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
                <Pressable
                    onPress={handleRegister} disabled={!agree}>
                    <View style={{...styles.reg_button, backgroundColor: "#9fd2c5",}}>
                        <Text style={{...styles.reg_button_text, color: "#487968"}}>Register!</Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    );

    else return(
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
                <Pressable
                    onPress={handleRegister} disabled={!agree}>
                    <View style={{...styles.reg_button, backgroundColor: "#69B9AA",}}>
                        <Text style={styles.reg_button_text}>Register!</Text>
                    </View>
                </Pressable>
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
        marginLeft: 30
    },
    checkmark: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    agreeText: {
        fontSize: 16,
        alignItems: "center"
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
        alignItems: "center",
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 30,
        alignItems: "center",
    },
    reg_button: {
        flexDirection: "row",
        //backgroundColor: "lightblue",
        justifyContent: "space-between",
        padding: 7,
        //alignItems: "center",
        width: "70%",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 25,
        marginBottom: 0,
        //elevation: 30,
        //boarder
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    reg_button_text:{
        fontSize: 30,
        marginLeft: 20,
        color: "#304D47",
    },
});

export default Register;