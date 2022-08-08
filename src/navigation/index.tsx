import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Start } from "../screens/Start";
import { SignUp } from "@screens/SignUp";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";

export interface RootStackParamList extends ParamListBase {
  Start: undefined;
  SignUp: undefined;
  Login: undefined;
  Register: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
