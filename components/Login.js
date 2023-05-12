import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
// Example usage in another file
import { navigationRef } from '../App';



const Login = ({navigation}) => {
    const [agree, setAgree] = useState(false);

    const toggleAgree = () => {
        setAgree(!agree);
    };

    const handleRegister = () => {
        if (agree) {
            // Perform the registration action
            // ...
            // Show a success message or navigate to the next screen
            Alert.alert('Registration successful');
            navigation.navigate('Home');
        } else {
            // Show an error message if the checkbox is not checked
            Alert.alert('Error', 'Please agree to the Privacy Policy');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity style={styles.checkbox} onPress={toggleAgree}>
                    {agree ? <Text style={styles.checkmark}>✓</Text> : null}
                </TouchableOpacity>
                <Text style={styles.agreeText}>I agree to the Privacy Policy</Text>
            </View>
            <Button title="Register" onPress={handleRegister} disabled={!agree} />
        </ScrollView>
    );
};

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
});

export default Login;
