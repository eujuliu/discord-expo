import React from "react";
import { Dimensions, ImageBackground, Text } from "react-native";
import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DefaultContainer,
  DefaultFormContainer,
  DefaultFormTitle,
} from "@assets/styles/global";
import { FloatingLabelInput } from "@components/FloatingLabelInput";
import { CustomTouchable } from "@components/CustomTouchable";
import { ReturnButton } from "@components/ReturnButton";
import { RegisterBoldText, RegisterSmallText } from "./styles";

interface RegisterScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Register"> {}

export function Register({}: RegisterScreenProps) {
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
        <ReturnButton />
        <DefaultFormContainer>
          <DefaultFormTitle>Register</DefaultFormTitle>
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
          <CustomTouchable title="Next" backgroundColor="#5865f2" />
        </DefaultFormContainer>
      </DefaultContainer>
    </ImageBackground>
  );
}
