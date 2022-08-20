import React, { useState } from "react";
import { Dimensions, ImageBackground, Linking } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation";

import { FloatingLabelInput } from "@components/FloatingLabelInput";
import { CustomTouchable } from "@components/CustomTouchable";
import { CustomSwitch } from "@components/CustomSwitch";
import { ReturnButton } from "@components/ReturnButton";

import {
  DefaultContainer,
  DefaultFormContainer,
  DefaultScreenTitle,
  DefaultLink,
} from "@assets/styles/global";
import { PhoneNumberInputContainer } from "./styles";

interface SignUpScreenProps
  extends NativeStackScreenProps<RootStackParamList, "SignUp"> {}

export function SignUp({ navigation }: SignUpScreenProps) {
  const [selectMode, setSelectMode] = useState("phone");

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
          <DefaultScreenTitle>Enter phone or email</DefaultScreenTitle>
          <CustomSwitch
            value1="Phone"
            value2="Email"
            selectMode={selectMode}
            setSelectMode={setSelectMode}
          />
          {selectMode === "phone" ? (
            <PhoneNumberInputContainer>
              <FloatingLabelInput
                label="Country Code"
                type="country-code"
                width="25%"
              />
              <FloatingLabelInput
                label="Phone Number"
                type="number"
                width="73%"
                autoFocus={true}
              />
            </PhoneNumberInputContainer>
          ) : (
            <FloatingLabelInput
              label="Email"
              type="email"
              width="100%"
              autoFocus={true}
            />
          )}
          <DefaultLink
            onPress={() => Linking.openURL("https://discord.com/privacy")}
          >
            View our Privacy Policy
          </DefaultLink>
          <CustomTouchable
            title="Next"
            backgroundColor="#5865f2"
            onPress={() => navigation.navigate("Register")}
          />
        </DefaultFormContainer>
      </DefaultContainer>
    </ImageBackground>
  );
}
