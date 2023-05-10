// App.js contains the startup component of the application.

import {
    Button,
    View,
    SafeAreaView,
    StyleSheet,
    Text, ScrollView,
} from 'react-native';
import React, {useState} from 'react';

// Import our components. See the components directory
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from "./components/SignUp";
import FirstScreen from "./components/FirstScreen";



// Import our components. See the components directory


const App = () => {
    const [user, setUser] = useState(null);

    // Conditionally show either the welcome component or the login component.
    if (!user) {
        // Pass the setUser function as a prop to the child component, so it can set the logged-in user state.
        return <Login setUser={setUser}/>
    }
    else {
        // Pass the currently logged-in user information to the Welcome component
        return <Welcome user={user}/>
    }
};

/*
homescreen with nav menu
*/
function HomeScreen({ navigation }) {

    return(
        <SafeAreaView>

            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <FirstScreen />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            style={styles.button}
                            title="To-Do List"
                            onPress={() => navigation.navigate('To-do List')}
                        />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
function ToDoScreen({ navigation }) {
    return(
        <SafeAreaView>

            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <SignUp />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
function DiaryScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
function GraphScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
function RewardsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
function GoalsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Home</Text>
            </View>
            <View>
                Hei! jeg er en setting screen
            </View>
            <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default function App1() {
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
        backgroundColor: '#fff',
        paddingTop: 20,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    container2: {
        flexDirection: "row",
        backgroundColor: "lightblue",
        justifyContent: "space-between",
        padding: 10,
        //alignItems: "center",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 10,
        marginBottom: 0,
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
    button: {
        color: "black",
        //fontSize: 17,
        backgroundColor: "transparent",
        padding: 7,
        margin: 20,
        width: "70%",
        alignSelf: "center",
        borderRadius: 0,
        flexDirection: "row",
        borderStyle: "solid",
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    }
});
