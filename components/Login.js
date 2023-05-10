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
import SignUp from "./SignUp";





// The prop setUser is a function that allows the parent component to get the logged in user from this component
const Login = ({setUser}) => {

  // Component state, mirrors the input fields
  const [username, setUsername] = useState("test@uia.no");
  const [password, setPassword] = useState("Password1.");
  const [userList, setUserList] = useState([]);
    const [userID,set_userID] = useState("");
   /* const getUserList = async () => {
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
    }, []);*/

  // Logs in the user based on the value of the component state.
  // This function is called when the button declared below is pressed.

        const [titleText, setTitleText] = useState("Log in");


        const onPressTitle = () => {
            loginUser();
        };

 const loginUser = () => {
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`User has been signed in: ${user.email}`);

          // Call the setter passed to us as a prop
          setUser(user);
        })
        .catch((error) => {
          console.log(`Error: ${error.code} ${error.message}`);
          const errorCode = error.code;
          const errorMessage = error.message;
        });

  }





  return (
      <SafeAreaView style={styles.container}>
          <View style={{marginTop: 50}}>
            <Text>
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                keyboardType="email-address"
                value="test@uia.no"
            />

            <Text></Text>

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                secureTextEntry={true}
                value="Password1."
            />
              <Text style={styles.baseText}>
                  <Text style={styles.titleText} onPress={onPressTitle}>
                      <Text style={styles.underlineTextStyle}>Log in</Text>
                      {titleText}
                      {'\n'}
                      {'\n'}
                  </Text>
              </Text>
              <View style={styles.fixToText}>
                    <Button
                        color="#69B9AA"
                        title="Settings"
                        onPress={() => navigation.navigate('Settings')}

                    />
              </View>
          </View>
      </SafeAreaView>

  );
}
function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: 50}}>
                <Text>
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    keyboardType="email-address"
                    value=""
                />

                <Text></Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    value=""
                />
                <Text style={styles.baseText}>
                    <Text style={styles.titleText} onPress={onPressTitle}>
                        <Text style={styles.underlineTextStyle}>Log in</Text>
                        {titleText}
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        color="#69B9AA"
                        title="Settings"
                        onPress={() => navigation.navigate('Settings')}

                    />
                </View>
            </View>
        </SafeAreaView>

    );
}
function ToDoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
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



function SettingsScreen() {
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

/*export default function App() {
    return (

        <NavigationContainer>
            <MyStack />
        </NavigationContainer>

    );
}*/
export default Login;

// installs:
//https://reactnavigation.org/docs/stack-navigator/

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#BEFCE0',
        //marginTop: 45,
        //alignItems: 'center',
        //justifyContent: 'center',
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
    input1: {
        fontSize: 15,
        backgroundColor: "lightblue",
        padding: 3,
        width: "100%",
        alignSelf: "center",
        borderRadius: 0,
        //automatically sticks to the bottom
        flexDirection: "row",
        borderStyle: "solid",
    }



});