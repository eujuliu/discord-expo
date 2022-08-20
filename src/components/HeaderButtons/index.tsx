import React from "react";
import { GestureResponderEvent } from "react-native";

import {
  HeaderButtonContainer,
  HeaderButton,
  HeaderButtonIcon,
} from "./styles";

interface HeaderButtonsProps {
  data: {
    icon: string;
    label: string;
    onPress?: (event: GestureResponderEvent) => void;
  }[];
}

export function HeaderButtons({ data }: HeaderButtonsProps) {
  return (
    <HeaderButtonContainer>
      {data.map(({ label, icon, onPress }) => {
        return (
          <HeaderButton key={label} onPress={onPress}>
            <HeaderButtonIcon
              source={{
                uri: `https://raw.githubusercontent.com/jjuliomarttins/discord-expo/main/assets/icons/${icon}`,
              }}
              accessibilityLabel={label}
            />
          </HeaderButton>
        );
      })}
    </HeaderButtonContainer>
  );
}
