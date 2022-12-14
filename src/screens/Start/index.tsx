import React from "react";
import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CustomTouchable } from "@components/CustomTouchable";

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
    <DefaultContainer hasBackgroundColor={true}>
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
        <CustomTouchable
          title="Register"
          backgroundColor="#5865f2"
          onPress={() => navigation.navigate("SignUp")}
        />
        <CustomTouchable
          title="Login"
          backgroundColor="#4f545c"
          onPress={() => navigation.navigate("Login")}
        />
      </StartScreenSection>
    </DefaultContainer>
  );
}
