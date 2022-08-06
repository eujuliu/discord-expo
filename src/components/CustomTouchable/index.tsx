import React from "react";
import { PressableProps } from "react-native";

import { Touchable, CustomTouchableText } from "./styles";

interface CustomTouchableProps extends PressableProps {
  title: string;
  backgroundColor: string;
}

export function CustomTouchable({
  title,
  backgroundColor,
  onPress,
}: CustomTouchableProps) {
  return (
    <Touchable backgroundColor={backgroundColor} onPress={onPress}>
      <CustomTouchableText>{title}</CustomTouchableText>
    </Touchable>
  );
}
