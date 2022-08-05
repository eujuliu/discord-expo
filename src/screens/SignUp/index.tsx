import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { DefaultContainer } from "@assets/styles/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation";
import { SignUpForm } from "./styles";
import { FloatingLabelInput } from "@components/FloatingLabelInput";

interface SignUpScreenProps
  extends NativeStackScreenProps<RootStackParamList, "SignUp"> {}

export function SignUp({ navigation }: SignUpScreenProps) {
  return (
    <DefaultContainer>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </Pressable>
      <SignUpForm>
        <Text>Enter phone or email</Text>
        <View>
          <Text>Phone</Text>
          <Text>Email</Text>
        </View>
        <FloatingLabelInput label="Email" type="email" />
        <FloatingLabelInput label="Phone Number" type="phone-number" />
      </SignUpForm>
    </DefaultContainer>
  );
}
