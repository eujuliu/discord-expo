import React from "react";
import { PressableProps } from "react-native";

import { Touchable, TouchableText } from "./styles";

interface CustomTouchableProps extends PressableProps {
  title: string;
  fontSize?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
}

export function CustomTouchable({
  title,
  onPress,
  fontSize,
  backgroundColor,
  margin,
  padding,
}: CustomTouchableProps) {
  return (
    <Touchable
      backgroundColor={backgroundColor}
      onPress={onPress}
      margin={margin}
      padding={padding}
    >
      <TouchableText fontSize={fontSize}>{title}</TouchableText>
    </Touchable>
  );
}
