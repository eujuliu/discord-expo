import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation";

import { FloatingLabelInput } from "@components/FloatingLabelInput";
import { CustomTouchable } from "@components/CustomTouchable";
import { CustomSwitch } from "@components/CustomSwitch";
import { ReturnButton } from "@components/ReturnButton";

import { DefaultContainer } from "@assets/styles/global";
import {
  PhoneNumberInputContainer,
  SignUpForm,
  SignUpFormText,
} from "./styles";

interface SignUpScreenProps
  extends NativeStackScreenProps<RootStackParamList, "SignUp"> {}

export function SignUp({ navigation }: SignUpScreenProps) {
  const [CustomSwitchSelectMode, CustomSwitchSetSelectMode] = useState("phone");

  return (
    <DefaultContainer>
      <ReturnButton onPress={() => navigation.goBack()} />
      <SignUpForm>
        <SignUpFormText>Enter phone or email</SignUpFormText>
        <CustomSwitch
          value1="Phone"
          value2="Email"
          selectMode={CustomSwitchSelectMode}
          setSelectMode={CustomSwitchSetSelectMode}
        />
        {CustomSwitchSelectMode === "phone" ? (
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
            />
          </PhoneNumberInputContainer>
        ) : (
          <FloatingLabelInput label="Email" type="email" width="100%" />
        )}
        <CustomTouchable title="Next" backgroundColor="#5865f2" />
      </SignUpForm>
    </DefaultContainer>
  );
}
