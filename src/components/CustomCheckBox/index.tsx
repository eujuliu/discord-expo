import React, { useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { CheckBoxText, CheckBoxTouchable } from "./styles";

interface CustomCheckBoxProps extends TouchableOpacityProps {
  title: string;
}

export function CustomCheckBox({ title }: CustomCheckBoxProps) {
  const [isChecked, setCheckBox] = useState(true);

  return (
    <CheckBoxTouchable onPress={() => setCheckBox(!isChecked)}>
      <CheckBoxText>{title}</CheckBoxText>
      <Ionicons
        name={isChecked ? "checkbox" : "square-outline"}
        size={22}
        color={isChecked ? "#949cf7" : "#b4b6b9"}
      />
    </CheckBoxTouchable>
  );
}
