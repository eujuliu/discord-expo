import React from "react";
import { ScrollView } from "react-native";

import { UserSettingsList } from "@components/UserSettingsList";

import { DefaultContainer } from "@assets/styles/global";
import {
  UserProfileContainer,
  UserProfileImage,
  UserProfileImageContainer,
  UserProfileName,
  UserProfileNameHashtag,
  UserProfileStatus,
  UserSettingsBanner,
} from "./styles";

export function UserSettings() {
  const userSettingsData = [
    { icon: "set-status-icon.png", label: "Set Status", type: "status" },
    { icon: "my-account-icon.png", label: "My Account", type: "normal" },
    { icon: "user-profile-icon.png", label: "User Profile", type: "normal" },
    {
      icon: "privacy-and-safety-icon.png",
      label: "Privacy & Safety",
      type: "normal",
    },
    {
      icon: "authorized-apps-icon.png",
      label: "Authorized Apps",
      type: "normal",
    },
    { icon: "connections-icon.png", label: "Connections", type: "normal" },
    { icon: "qr-code-icon.png", label: "Scan QR Code", type: "normal" },
  ];

  const appSettingsData = [
    {
      icon: "voice-and-video-icon.png",
      label: "Voice & Video",
      type: "normal",
    },
    { icon: "notifications-icon.png", label: "Notifications", type: "normal" },
    {
      icon: "text-and-images-icon.png",
      label: "Text & Images",
      type: "normal",
    },
    { icon: "appearance-icon.png", label: "Appearance", type: "normal" },
    { icon: "accessibility-icon.png", label: "Accessibility", type: "normal" },
    { icon: "behavior-icon.png", label: "Behavior", type: "normal" },
    { icon: "language-icon.png", label: "Language", type: "normal" },
    {
      icon: "activity-status-icon.png",
      label: "Activity Status",
      type: "normal",
    },
  ];

  const appInformationData = [
    { icon: "information-icon.png", label: "Change Log", type: "normal" },
    { icon: "support-icon.png", label: "Support", type: "normal" },
    {
      icon: "information-icon.png",
      label: "Upload debug logs to Discord Support",
      type: "normal",
    },
    { icon: "information-icon.png", label: "Acknowledgements", type: "normal" },
  ];

  return (
    <DefaultContainer hasBackgroundColor={true} extraStyles={"padding: 0;"}>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <UserProfileContainer>
          <UserSettingsBanner />
          <UserProfileImageContainer>
            <UserProfileImage
              source={require("@assets/images/profile-picture.png")}
              accessibilityLabel="Profile"
            />
            <UserProfileStatus />
          </UserProfileImageContainer>
          <UserProfileName>
            Name<UserProfileNameHashtag>#0000</UserProfileNameHashtag>
          </UserProfileName>
        </UserProfileContainer>
        <UserSettingsList headerText="USER SETTINGS" data={userSettingsData} />
        <UserSettingsList headerText="APP SETTINGS" data={appSettingsData} />
        <UserSettingsList
          headerText="APP INFORMATION - 126.21 - STABLE (126021)"
          data={appInformationData}
        />
      </ScrollView>
    </DefaultContainer>
  );
}
