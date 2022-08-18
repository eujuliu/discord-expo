import React from "react";

import {
  HeaderButtonContainer,
  HeaderButton,
  HeaderButtonIcon,
} from "./styles";

interface HeaderButtonsProps {
  data: { icon: string; label: string }[];
}

export function HeaderButtons({ data }: HeaderButtonsProps) {
  return (
    <HeaderButtonContainer>
      {data.map((button) => {
        return (
          <HeaderButton key={button.label}>
            <HeaderButtonIcon
              source={{
                uri: `https://raw.githubusercontent.com/jjuliomarttins/discord-expo/main/assets/icons/${button.icon}`,
              }}
              accessibilityLabel={button.label}
            />
          </HeaderButton>
        );
      })}
    </HeaderButtonContainer>
  );
}
