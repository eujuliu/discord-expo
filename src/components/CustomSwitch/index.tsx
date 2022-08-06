import React, { useState } from "react";
import { TouchableOpacityProps } from "react-native";

import {
  CustomSwitchContainer,
  CustomSwitchText,
  CustomSwitchTouchable,
} from "./styles";

interface CustomSwitchProps extends TouchableOpacityProps {
  value1: string;
  value2: string;
  selectMode: string;
  setSelectMode: (value: string) => void;
}

export function CustomSwitch({
  value1,
  value2,
  selectMode,
  setSelectMode,
}: CustomSwitchProps) {
  return (
    <CustomSwitchContainer>
      <CustomSwitchTouchable onPress={() => setSelectMode("phone")}>
        <CustomSwitchText isSelected={selectMode === "phone"}>
          {value1}
        </CustomSwitchText>
      </CustomSwitchTouchable>

      <CustomSwitchTouchable onPress={() => setSelectMode("email")}>
        <CustomSwitchText isSelected={selectMode === "email"}>
          {value2}
        </CustomSwitchText>
      </CustomSwitchTouchable>
    </CustomSwitchContainer>
  );
}
