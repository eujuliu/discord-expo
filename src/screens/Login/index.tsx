import React from "react";
import { Dimensions, ImageBackground, Linking } from "react-native";
import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ReturnButton } from "@components/ReturnButton";
import { FloatingLabelInput } from "@components/FloatingLabelInput";
import { CustomTouchable } from "@components/CustomTouchable";

import {
  DefaultContainer,
  DefaultFormContainer,
  DefaultScreenTitle,
  DefaultLink,
} from "@assets/styles/global";
import { LoginSmallText } from "./styles";

interface LoginScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Login"> {}

export function Login({ navigation }: LoginScreenProps) {
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
        <DefaultScreenTitle>Welcome back!</DefaultScreenTitle>
        <LoginSmallText>We're so excited to see you again!</LoginSmallText>
        <DefaultFormContainer>
          <FloatingLabelInput
            label="Email or Phone Number"
            type="email"
            width="100%"
            autoFocus={true}
          />
          <FloatingLabelInput label="Password" type="password" width="100%" />
          <DefaultLink
            onPress={() =>
              Linking.openURL("https://github.com/jjuliomarttins/discord-expo")
            }
          >
            Forgot your password?
          </DefaultLink>

          <DefaultLink
            onPress={() =>
              Linking.openURL("https://github.com/jjuliomarttins/discord-expo")
            }
          >
            Use a password manager?
          </DefaultLink>
          <CustomTouchable title="Login" backgroundColor="#5865f2" />
        </DefaultFormContainer>
      </DefaultContainer>
    </ImageBackground>
  );
}
