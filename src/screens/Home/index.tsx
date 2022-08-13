import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HeaderButtons } from "@components/HeaderButtons";

import { ServerList } from "./ServerList";
import { UserSettings } from "./UserSettings";
import { Friends } from "./Friends";

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Home"> {}

const Tab = createBottomTabNavigator();

export function Home({}: HomeScreenProps) {
  const friendsButtonData = [
    { icon: "new-contact-icon.png", label: "New Contact" },
    { icon: "new-message-icon.png", label: "New Message" },
    { icon: "new-friend-icon.png", label: "New Friend" },
  ];

  const settingButtonData = [
    { icon: "leave-icon.png", label: "Leave" },
    { icon: "three-points-icon.png", label: "Extra Settings" },
  ];

  return (
    <Tab.Navigator
      initialRouteName="ServerList"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarStyle: {
          backgroundColor: "#18191c",
          borderTopWidth: 0,
          height: 55,
        },
      }}
    >
      <Tab.Screen name="ServerList" component={ServerList} />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#2f3136",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: { color: "#fff" },
          headerRight: () => <HeaderButtons data={friendsButtonData} />,
        }}
      />
      <Tab.Screen
        name="UserSettings"
        component={UserSettings}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#2f3136",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: { color: "#fff" },
          headerRight: () => <HeaderButtons data={settingButtonData} />,
        }}
      />
    </Tab.Navigator>
  );
}
