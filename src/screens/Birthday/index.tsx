import React from "react";
import { Dimensions, ImageBackground, Linking } from "react-native";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CustomTouchable } from "@components/CustomTouchable";
import { FloatingLabelInput } from "@components/FloatingLabelInput";
import { ReturnButton } from "@components/ReturnButton";

import {
  DefaultContainer,
  DefaultFormContainer,
  DefaultScreenTitle,
  DefaultLink,
} from "@assets/styles/global";
import { BirthdaySmallText } from "./styles";

interface BirthdayScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Birthday"> {}

export function Birthday({ navigation }: BirthdayScreenProps) {
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
          <DefaultScreenTitle>Enter your birthday</DefaultScreenTitle>
          <FloatingLabelInput label="Date of Birth" type="date" width="100%" />
          <BirthdaySmallText>
            By registering, you agree to Discord's{" "}
            <DefaultLink
              onPress={() => Linking.openURL("https://discord.com/terms")}
            >
              Terms of Service
            </DefaultLink>{" "}
            and{" "}
            <DefaultLink
              onPress={() => Linking.openURL("https://discord.com/privacy")}
            >
              Privacy Policy
            </DefaultLink>
            .
          </BirthdaySmallText>
          <CustomTouchable
            title="Create an account"
            backgroundColor="#5865f2"
            onPress={() => navigation.navigate("Captcha")}
          />
        </DefaultFormContainer>
      </DefaultContainer>
    </ImageBackground>
  );
}
