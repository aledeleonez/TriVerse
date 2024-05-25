// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import Activity from "./screens/Activity";
import Swim from "./screens/Swim";
import Bike from "./screens/Bike";
import Run from "./screens/Run";
import User from "./screens/User";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Activity' component={Activity} />
        <Stack.Screen name='Swim' component={Swim} />
        <Stack.Screen name='Bike' component={Bike} />
        <Stack.Screen name='Run' component={Run} />
        <Stack.Screen name='User' component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
