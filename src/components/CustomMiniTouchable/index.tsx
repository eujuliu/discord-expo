import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MiniTouchable, MiniTouchableText } from "./styles";

interface CustomMiniTouchableProps extends TouchableOpacityProps {
  title: string;
  fontSize?: string;
  backgroundColor?: string;
}

export function CustomMiniTouchable({
  title,
  onPress,
  fontSize,
  backgroundColor,
}: CustomMiniTouchableProps) {
  return (
    <MiniTouchable onPress={onPress} backgroundColor={backgroundColor}>
      <MiniTouchableText fontSize={fontSize}>{title}</MiniTouchableText>
    </MiniTouchable>
  );
}
