import React from "react";
import { PressableProps } from "react-native";

import { CustomPressable, CustomPressableText } from "./styles";

interface CustomButtonProps extends PressableProps {
  title: string;
  backgroundColor: string;
}

export function CustomButton({
  title,
  backgroundColor,
  onPress,
}: CustomButtonProps) {
  return (
    <CustomPressable backgroundColor={backgroundColor} onPress={onPress}>
      <CustomPressableText>{title}</CustomPressableText>
    </CustomPressable>
  );
}
