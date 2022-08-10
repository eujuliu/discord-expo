import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MiniTouchable, MiniTouchableText } from "./styles";

interface CustomMiniTouchableProps extends TouchableOpacityProps {
  title: string;
  fontSize?: string;
}

export function CustomMiniTouchable({
  title,
  onPress,
  fontSize,
}: CustomMiniTouchableProps) {
  return (
    <MiniTouchable onPress={onPress}>
      <MiniTouchableText fontSize={fontSize}>{title}</MiniTouchableText>
    </MiniTouchable>
  );
}
