import React from "react";
import { Text } from "react-native";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { DefaultContainer } from "@assets/styles/global";

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Home"> {}

export function Home({}: HomeScreenProps) {
  return (
    <DefaultContainer hasBackgroundColor={true}>
      <Text>Home</Text>
    </DefaultContainer>
  );
}
