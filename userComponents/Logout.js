import {signOut} from "firebase/auth";
import {auth} from "../firebaseConfig";

import React, { useState } from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, TextInput, Pressable} from 'react-native';


const Logout = ({navigation, setUser}) => {
    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log(`User has been signed out`);
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
            console.log(`Error: ${error.code} ${error.message}`);
        });
    }
    return(
        <Button title="Log Out" onPress={logoutUser} />
    );
}

export default Logout
