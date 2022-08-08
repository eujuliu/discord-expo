import React, { useState } from "react";
import { TextInputProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  FloatingLabelContainer,
  FloatingLabel,
  Input,
  InputWrapper,
} from "./styles";
import { Pressable } from "react-native";

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  type: "number" | "email" | "password" | "country-code";
  width: string;
}

export function FloatingLabelInput({
  label,
  type,
  width,
  autoFocus,
}: FloatingLabelInputProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <FloatingLabelContainer width={width}>
      <FloatingLabel
        isFloating={isFocused || value.length !== 0 || type === "country-code"}
      >
        {label}
      </FloatingLabel>
      <InputWrapper>
        <Input
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(!isFocused)}
          value={value}
          onChangeText={(newText) => setValue(newText)}
          keyboardType={
            type === "number" || type === "country-code" ? "numeric" : "default"
          }
          autoFocus={autoFocus}
          secureTextEntry={passwordVisibility && type === "password"}
        />
        {type === "password" ? (
          <Pressable onPress={() => setPasswordVisibility(!passwordVisibility)}>
            <Ionicons
              name={passwordVisibility ? "eye" : "eye-off"}
              size={22}
              color="#b9bbbe"
            />
          </Pressable>
        ) : null}
        {type !== "password" && value.length > 0 ? (
          <Pressable onPress={() => setValue("")}>
            <Ionicons name="close-circle" size={22} color="#b9bbbe" />
          </Pressable>
        ) : null}
      </InputWrapper>
    </FloatingLabelContainer>
  );
}
