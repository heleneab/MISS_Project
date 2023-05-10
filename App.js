// App.js contains the startup component of the application.

import {
    Button,
    View,
    SafeAreaView,
    StyleSheet,
    Text, ScrollView, Pressable,
} from 'react-native';
import React, {useState} from 'react';

// Import our components. See the components directory
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// Import our components. See the components directory




/*
homescreen with nav menu
*/
function HomeScreen({ navigation }) {

    return(
        <SafeAreaView styles={{backgroundColor: "#BEFCE0"}}>

            <ScrollView>
                <View >
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.navigate('To-do List')}>
                            <View style={{ ...styles.nav_button, backgroundColor: "#CBCAE3" }}>
                                <Text style={styles.nav_button_text}>To-do List</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Diary')}>
                            <View style={{ ...styles.nav_button, backgroundColor: "#BEFCFC" }}>
                                <Text style={styles.nav_button_text}>Diary</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Graph')}>
                            <View style={{ ...styles.nav_button, backgroundColor: "#FCF6BE" }}>
                                <Text style={styles.nav_button_text}>Graph</Text>
                            </View>
                        </Pressable>
                        <View style={{ ...styles.nav_button, backgroundColor: "#FCBEBE" }}>
                            <Pressable onPress={() => navigation.navigate('Rewards')}>
                                <Text style={styles.nav_button_text}>Rewards</Text>
                            </Pressable>
                        </View>



                        <Pressable
                             onPress={() => navigation.navigate('Goals')}>
                            <View style={{...styles.nav_button, backgroundColor: "#F8DAC4",}}>
                                <Text style={styles.nav_button_text}>Goals</Text>
                            </View>
                        </Pressable>





                        <Pressable
                            onPress={() => navigation.navigate('Settings')}>
                            <View style={{...styles.nav_button, backgroundColor: "#CAFFCC",}}>
                            <Text style={styles.nav_button_text}>Settings</Text>
                        </View>
                        </Pressable>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
function ToDoScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#CBCAE3"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
        </View>
    );
}
function DiaryScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#BEFCFC"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
        </View>
    );
}
function GraphScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#FCF6BE"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
        </View>
    );
}
function RewardsScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#FCBEBE"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
        </View>
    );
}
function GoalsScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#F8DAC4"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
        </View>
    );
}
function SettingsScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#CAFFCC"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
        </View>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator /*screenOptions={{headerShown: false}}*/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="To-do List" component={ToDoScreen} />
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="Graph" component={GraphScreen} />
            <Stack.Screen name="Rewards" component={RewardsScreen} />
            <Stack.Screen name="Goals" component={GoalsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}


//export default HomeScreen;

export default function App() {
    return (

        <NavigationContainer>
            <MyStack />
        </NavigationContainer>

    );
}
// installs:
//https://reactnavigation.org/docs/stack-navigator/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        //backgroundColor: '#AAD2C0',
        paddingTop: 40,
        //alignItems: 'center',
        justifyContent: 'space-between',
        height: "100%",
    },

    header: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: "auto"
    },
    heading: {
        fontSize: 30,
        //backgroundColor: "red",
        fontWeight: "500",
        flex: 1,
    },

    nav_button: {
        flexDirection: "row",
        //backgroundColor: "lightblue",
        justifyContent: "space-between",
        padding: 10,
        //alignItems: "center",
        width: "70%",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 25,
        marginBottom: 0,
        elevation: 30
    },
    nav_button_text:{
        fontSize: 30,
        marginLeft: 20,
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    }
});
