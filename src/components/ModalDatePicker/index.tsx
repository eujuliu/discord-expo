import React, { useState } from "react";
import { Modal } from "react-native";
import DatePicker from "react-native-date-picker";

import { CustomMiniTouchable } from "@components/CustomMiniTouchable";

import { ModalContainer, ModalPressable, ModalTitle } from "./styles";

interface ModalDatePicker {
  isDatePickerVisible: boolean;
  setDatePickerVisibility: (value: boolean) => void;
  setValue: (value: any) => void;
}

export function ModalDatePicker({
  isDatePickerVisible,
  setDatePickerVisibility,
  setValue,
}: ModalDatePicker) {
  const [date, setDate] = useState(new Date());

  return (
    <Modal
      visible={isDatePickerVisible}
      transparent={true}
      onRequestClose={() => {
        setDatePickerVisibility(!isDatePickerVisible);
      }}
    >
      <ModalPressable
        onPress={() => {
          setDatePickerVisibility(!isDatePickerVisible);
        }}
      />
      <ModalContainer>
        <ModalTitle>Date of birth</ModalTitle>
        <DatePicker
          date={date}
          mode="date"
          onDateChange={(newDate) => {
            setDate(newDate);
            setValue(
              newDate.toLocaleDateString("default", { timeStyle: "short" })
            );
          }}
          style={{ width: 250 }}
          androidVariant="nativeAndroid"
        />
        <CustomMiniTouchable
          title="Done"
          onPress={() => {
            setValue(
              date.toLocaleDateString("default", { timeStyle: "short" })
            );
            setDatePickerVisibility(!isDatePickerVisible);
          }}
        ></CustomMiniTouchable>
      </ModalContainer>
    </Modal>
  );
}
