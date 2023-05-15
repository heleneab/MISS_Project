// App.js contains the startup component of the application.

import {
    Button,
    View,
    SafeAreaView,
    StyleSheet,
    Text, ScrollView, Pressable,
} from 'react-native';
import React, {useState} from 'react';

// Import our userComponents. See the userComponents directory
import {NavigationContainer, navigationRef, onReady, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationContainer from "@react-navigation/native/src/NavigationContainer";



// Import our userComponents. See the userComponents directory
import Privacy from "./userComponents/Privacy";
import Login from "./userComponents/Login";
import Logout from "./userComponents/Logout";
import Register from "./userComponents/Register";

import Todo from "./todoComponents/Todo"
import Task from "./todoComponents/Task";

import Goals from "./goalsComponents/Goals";
import TaskG from "./goalsComponents/TaskG";

/*
homescreen with nav menu
*/
function HomeScreen({ navigation }) {

    const [user, setUser] = useState(null);
    const route = useRoute();
    const { userId, userEmail } = route.params;

    // Conditionally show either the welcome component or the login component.
    if (0/*!user*/) {
        // Pass the setUser function as a prop to the child component, so it can set the logged-in user state.
        navigation.navigate('Login')
    }
    else {
        // Pass the currently logged-in user information to the Welcome component
        //return <Welcome user={user}/>

        return(
            <SafeAreaView>
                <ScrollView contentContainerStyle={{...styles.scroll_container, backgroundColor: "#BEFCE0"} }>
                    <View style={{...styles.container}}>
                        <Pressable onPress={() => navigation.navigate('To-do List', { userId, userEmail })}>
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
                        <Pressable onPress={() => navigation.navigate('Rewards')}>
                            <View style={{ ...styles.nav_button, backgroundColor: "#FCBEBE" }}>
                                <Text style={styles.nav_button_text}>Rewards</Text>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate('Goals List',{userId})}>
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
                </ScrollView>
            </SafeAreaView>

        )
    }
}
function ToDoScreen({ navigation }) {
    return (

    <SafeAreaView>

        <ScrollView contentContainerStyle={{...styles.scroll_container, backgroundColor: "#CBCAE3"}}>
            <View style={{...styles.container, backgroundColor: "#CBCAE3"}}>

                <Todo navigation={navigation}/>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}
function TaskScreen({ navigation }) {
    return (

    <SafeAreaView>

        <ScrollView contentContainerStyle={{...styles.scroll_container, backgroundColor: "#CBCAE3"}}>
            <View style={{...styles.container, backgroundColor: "#CBCAE3"}}>

                <Task/>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

function GoalsScreen({ navigation }) {
    return (
        <SafeAreaView>

            <ScrollView contentContainerStyle={{...styles.scroll_container, backgroundColor: "#F8DAC4"}}>
                <View style={{...styles.container, backgroundColor: "#F8DAC4"}}>

                    <Goals navigation={navigation}/>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function TaskGScreen({ navigation }) {
    return (
        <SafeAreaView>

            <ScrollView contentContainerStyle={{...styles.scroll_container, backgroundColor: "#F8DAC4"}}>
                <View style={{...styles.container, backgroundColor: "#F8DAC4"}}>

                    <TaskG/>

                </View>
            </ScrollView>
        </SafeAreaView>
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
function SettingsScreen({ navigation }) {
    return (
        <View style={{...styles.container, backgroundColor: "#CAFFCC"}}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Hei! jeg er en setting screen</Text>
            </View>
            <Logout navigation={navigation}/>
        </View>
    );
}
function LoginScreen({ navigation }) {
    const [user, setUser] = useState(null);

    return (
        <View style={{...styles.container, backgroundColor: "#BEFCE0"}}>
            <Login navigation={navigation} setUser={setUser}/>
        </View>
    );
}

function RegisterScreen({ navigation }) {
    const [user, setUser] = useState(null);

    return (
        <View style={{...styles.container, backgroundColor: "#BEFCE0"}}>
            <Register navigation={navigation} setUser={setUser}/>
        </View>
    );
}
function PrivacyScreen({ navigation }) {

    return (
        <View style={{...styles.container, backgroundColor: "#CAFFCC"}}>
            <Privacy/>

        </View>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator /*screenOptions={{headerShown: false}}*/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="To-do List" component={ToDoScreen} />
            <Stack.Screen name="To-Do Task" component={TaskScreen} />
            <Stack.Screen name="Goals List" component={GoalsScreen} />
            <Stack.Screen name="Goals Task" component={TaskGScreen} />
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="Graph" component={GraphScreen} />
            <Stack.Screen name="Rewards" component={RewardsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Privacy" component={PrivacyScreen} />
        </Stack.Navigator>
    );
}


//export default HomeScreen;

export default function App() {

    return (

        <NavigationContainer  ref={navigationRef} onReady={onReady}>
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
        //paddingTop: 20,
        //alignItems: 'center',
        justifyContent: 'space-between',
        height: "100%",
        marginTop: "auto"
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
        elevation: 30,
        //boarder
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    nav_button_text:{
        fontSize: 30,
        marginLeft: 20,
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    },
    scroll_container: {
        // backgroundColor: "#BEFCE0",
        paddingTop: 40,
        justifyContent: 'space-between',
        minHeight: '100%',
        paddingBottom: 40,
    },
    link: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
    },
});
