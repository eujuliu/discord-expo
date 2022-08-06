import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { FloatingLabelContainer, FloatingLabel, Input } from "./styles";

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  type: "number" | "email" | "password" | "country-code";
  width: string;
}

export function FloatingLabelInput({
  label,
  type,
  width,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <FloatingLabelContainer width={width}>
      <FloatingLabel
        isFloating={isFocused || value.length !== 0 || type === "country-code"}
      >
        {label}
      </FloatingLabel>
      <Input
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        value={value}
        onChangeText={(newText) => setValue(newText)}
        keyboardType={
          type === "number" || type === "country-code" ? "numeric" : "default"
        }
      />
    </FloatingLabelContainer>
  );
}
