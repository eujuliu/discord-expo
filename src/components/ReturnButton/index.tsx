import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { ReturnButtonContainer, ReturnButtonText, Touchable } from "./styles";

export function ReturnButton({ onPress }: TouchableOpacityProps) {
  return (
    <ReturnButtonContainer>
      <Touchable onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <ReturnButtonText>Back</ReturnButtonText>
      </Touchable>
    </ReturnButtonContainer>
  );
}
