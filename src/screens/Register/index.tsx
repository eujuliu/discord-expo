import React from "react";
import { Dimensions, ImageBackground } from "react-native";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { FloatingLabelInput } from "@components/FloatingLabelInput";
import { CustomTouchable } from "@components/CustomTouchable";
import { ReturnButton } from "@components/ReturnButton";

import {
  DefaultContainer,
  DefaultFormContainer,
  DefaultScreenTitle,
} from "@assets/styles/global";
import { RegisterBoldText, RegisterSmallText } from "./styles";

interface RegisterScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Register"> {}

export function Register({ navigation }: RegisterScreenProps) {
  return (
    <ImageBackground
      source={require("@assets/images/background-image.png")}
      style={{
        backgroundColor: "#36393f",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <DefaultContainer hasBackgroundColor={false}>
        <ReturnButton onPress={() => navigation.goBack()} />
        <DefaultFormContainer>
          <DefaultScreenTitle>Register</DefaultScreenTitle>
          <RegisterBoldText>WHAT SHOULD EVERYONE CALL YOU?</RegisterBoldText>
          <FloatingLabelInput
            label="Username"
            type="text"
            width="100%"
            autoFocus={true}
          />
          <RegisterSmallText>
            You can always change this later!
          </RegisterSmallText>
          <FloatingLabelInput label="Password" type="password" width="100%" />
          <CustomTouchable
            title="Next"
            backgroundColor="#5865f2"
            onPress={() => navigation.navigate("Birthday")}
          />
        </DefaultFormContainer>
      </DefaultContainer>
    </ImageBackground>
  );
}
