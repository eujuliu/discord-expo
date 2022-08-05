import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground } from "react-native";

import { RootStackParamList } from "@navigation";
import { CustomButton } from "@components/CustomButton";

import { DefaultContainer } from "@assets/styles/global";
import {
  ImageStyled,
  StartScreenSection,
  StartScreenText,
  WelcomeText,
} from "./styles";

interface StartScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Start"> {}

export function Start({ navigation }: StartScreenProps) {
  return (
    <DefaultContainer>
      <StatusBar style="light" />
      <ImageStyled
        source={require("@assets/images/start-screen-art.png")}
        accessibilityLabel="Discord"
        resizeMode="contain"
      />
      <StartScreenSection>
        <WelcomeText>Welcome to Discord</WelcomeText>
        <StartScreenText>
          Join over 100 million people who use Discord to talk with communities
          and friends.
        </StartScreenText>
        <CustomButton
          title="Register"
          backgroundColor="#5865f2"
          onPress={() => navigation.navigate("SignUp")}
        />
        <CustomButton
          title="Login"
          backgroundColor="#4f545c"
          onPress={() => console.log("Login")}
        />
      </StartScreenSection>
    </DefaultContainer>
  );
}
