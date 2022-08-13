import React from "react";
import { Image, TouchableOpacityProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  ServerCategoryItemContainer,
  ServerCategoryItemText,
  ServerCategoryItemTouchable,
} from "./styles";

interface ServerCategoryListItemProps extends TouchableOpacityProps {
  image: string;
  label: string;
}

export function ServerCategoryListItem({
  image,
  label,
}: ServerCategoryListItemProps) {
  return (
    <ServerCategoryItemTouchable>
      <ServerCategoryItemContainer>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/jjuliomarttins/discord-expo/main/assets/images/${image}`,
          }}
          accessibilityLabel={label}
          style={{ width: 45, height: 45 }}
        />
        <ServerCategoryItemText>{label}</ServerCategoryItemText>
      </ServerCategoryItemContainer>
      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </ServerCategoryItemTouchable>
  );
}
