import React from "react";
import { Image } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation";

import { Ionicons } from "@expo/vector-icons";

import { CustomTouchable } from "@components/CustomTouchable";

import { DefaultContainer } from "@assets/styles/global";
import {
  ServerListMessagesTouchable,
  NewServerButton,
  ServerListDivider,
  ServerHelp,
  ServerListAside,
  TouchableFocusedIndicator,
  ServerListSection,
  ServerListText,
  ServerListSmallText,
} from "./styles";

interface ServerListProps
  extends NativeStackScreenProps<RootStackParamList, "Home"> {}

export function ServerList({ navigation }: ServerListProps) {
  return (
    <DefaultContainer
      hasBackgroundColor={true}
      extraStyles={"padding: 0px; flex-direction: row;"}
    >
      <ServerListAside>
        <ServerListMessagesTouchable disabled>
          <TouchableFocusedIndicator />
          <Image
            source={require("@assets/images/messages.png")}
            accessibilityLabel="Messages"
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </ServerListMessagesTouchable>
        <ServerListDivider />
        <NewServerButton
          onPress={() => navigation.navigate("CreateYourServer")}
        >
          <Ionicons name="add" size={27} color="#3ba55c" />
        </NewServerButton>
        <ServerListDivider />
        <ServerHelp>
          <Ionicons name="help" size={18} color="#202225" />
        </ServerHelp>
      </ServerListAside>
      <ServerListSection>
        <Image
          source={require("@assets/images/wumpus.png")}
          accessibilityLabel="Wumpus on the cine chair"
          style={{ width: 290, height: 170, marginTop: 90 }}
          resizeMode="contain"
        />
        <ServerListText>
          Wumpus is waiting on friends. You don't have though!
        </ServerListText>
        <ServerListSmallText>
          Try adding a friend with their username, or scan to see who is nearby.
        </ServerListSmallText>
        <CustomTouchable
          title="Add Friend"
          fontSize="12px"
          margin="0 auto"
          padding="10px"
        />
      </ServerListSection>
    </DefaultContainer>
  );
}
