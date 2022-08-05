import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { CustomInputContainer, FloatingLabel, Input } from "./styles";

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  type: "phone-number" | "email" | "password";
}

export function FloatingLabelInput({ label, type }: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <CustomInputContainer>
      <FloatingLabel isFocused={isFocused} isNotEmpty={value.length !== 0}>
        {label}
      </FloatingLabel>
      <Input
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        value={value}
        onChangeText={(newText) => setValue(newText)}
      />
    </CustomInputContainer>
  );
}
