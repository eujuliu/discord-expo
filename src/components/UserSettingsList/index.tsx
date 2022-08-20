import React from "react";
import { Image } from "react-native";

import {
  CircleStatusColor,
  SetStatusContainer,
  SetStatusText,
  UserSettingListContainer,
  UserSettingListText,
  UserSettingsTouchable,
  UserSettingsTouchableText,
} from "./styles";

interface UserSettingsListProps {
  headerText: string;
  data: { icon: string; label: string; type: string }[];
}

export function UserSettingsList({ headerText, data }: UserSettingsListProps) {
  return (
    <UserSettingListContainer
      style={{ borderBottomWidth: 0.3, borderBottomColor: "#44484f" }}
    >
      <UserSettingListText>{headerText}</UserSettingListText>
      {data.map((value) => {
        return (
          <UserSettingsTouchable key={value.label}>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/jjuliomarttins/discord-expo/main/assets/icons/${value.icon}`,
              }}
              accessibilityLabel={value.label}
              style={{ width: 25, height: 25, marginRight: 25 }}
            />
            <UserSettingsTouchableText>{value.label}</UserSettingsTouchableText>
            {value.type === "status" ? (
              <SetStatusContainer>
                <CircleStatusColor />
                <SetStatusText>Online</SetStatusText>
              </SetStatusContainer>
            ) : null}
          </UserSettingsTouchable>
        );
      })}
    </UserSettingListContainer>
  );
}
