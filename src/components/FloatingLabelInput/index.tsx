import React, { useState } from "react";
import { TextInputProps, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  FloatingLabelContainer,
  FloatingLabel,
  Input,
  InputWrapper,
} from "./styles";
import { ModalDatePicker } from "@components/ModalDatePicker";

interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  type: "number" | "email" | "password" | "country-code" | "text" | "date";
  width: string;
}

export function FloatingLabelInput({
  label,
  type,
  width,
  autoFocus,
}: FloatingLabelInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  function showClearValueButton() {
    return type !== "password" && value.length > 0 ? (
      <Pressable onPress={() => setValue("")}>
        <Ionicons name="close-circle" size={22} color="#b9bbbe" />
      </Pressable>
    ) : null;
  }

  function showEyeButtonOnPasswordType() {
    return type === "password" ? (
      <Pressable onPress={() => setPasswordVisibility(!passwordVisibility)}>
        <Ionicons
          name={passwordVisibility ? "eye" : "eye-off"}
          size={22}
          color="#b9bbbe"
        />
      </Pressable>
    ) : null;
  }

  return (
    <FloatingLabelContainer width={width}>
      <FloatingLabel
        isFloating={isFocused || value.length !== 0 || type === "country-code"}
      >
        {label}
      </FloatingLabel>
      <InputWrapper>
        <Input
          onFocus={() => setFocused(!isFocused)}
          onBlur={() => setFocused(!isFocused)}
          showSoftInputOnFocus={!(type === "date")}
          value={value}
          onChangeText={(newText) => setValue(newText)}
          keyboardType={
            type === "number" || type === "country-code" ? "numeric" : "default"
          }
          autoFocus={autoFocus}
          secureTextEntry={passwordVisibility && type === "password"}
          onPressOut={
            type === "date"
              ? () => setDatePickerVisibility(!isDatePickerVisible)
              : null
          }
        />
        {showEyeButtonOnPasswordType() || showClearValueButton()}
        <ModalDatePicker
          isDatePickerVisible={isDatePickerVisible}
          setDatePickerVisibility={setDatePickerVisibility}
          setValue={setValue}
        />
      </InputWrapper>
    </FloatingLabelContainer>
  );
}
