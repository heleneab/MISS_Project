import {signOut, deleteUser} from "firebase/auth";
import {auth} from "../firebaseConfig";

import React, { useState } from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, TextInput, Pressable} from 'react-native';


const Logout = ({navigation, setUser}) => {
    const user = auth.currentUser;
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


    const deleteAccount = async () => {
        deleteUser(user).then(() => {
            // User deleted.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error ocurred
            console.log(`Error: ${error.code} ${error.message}`);
        });
    };



    return(
        <View>
            <Button title="Delete User" onPress={deleteAccount} />
            <Button title="Log Out" onPress={logoutUser} />
        </View>
    );
}

export default Logout
