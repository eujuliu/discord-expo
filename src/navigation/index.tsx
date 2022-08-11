import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Start } from "../screens/Start";
import { SignUp } from "@screens/SignUp";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { Birthday } from "@screens/Birthday";
import { Captcha } from "@screens/Captcha";
import { FindYourFriends } from "@screens/FindYourFriends";
import { CreateYourServer } from "@screens/CreateYourServer";
import { Home } from "@screens/Home";

export interface RootStackParamList extends ParamListBase {
  Start: undefined;
  SignUp: undefined;
  Login: undefined;
  Register: undefined;
  Birthday: undefined;
  Captcha: undefined;
  FindYourFriends: undefined;
  CreateYourServer: undefined;
  Home: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Birthday" component={Birthday} />
        <Stack.Screen name="Captcha" component={Captcha} />
        <Stack.Screen name="FindYourFriends" component={FindYourFriends} />
        <Stack.Screen name="CreateYourServer" component={CreateYourServer} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
