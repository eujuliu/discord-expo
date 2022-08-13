import React from "react";
import { Image } from "react-native";

import { CustomMiniTouchable } from "@components/CustomMiniTouchable";

import { DefaultContainer } from "@assets/styles/global";
import { FriendsSection, FriendsSmallText, FriendsText } from "./styles";

export function Friends() {
  return (
    <DefaultContainer
      hasBackgroundColor={true}
      extraStyles={"padding: 20px 0px;"}
    >
      <FriendsSection>
        <Image
          source={require("@assets/images/wumpus.png")}
          accessibilityLabel="Wumpus on the cine chair"
          style={{ width: 290, height: 170, marginTop: 90 }}
          resizeMode="contain"
        />
        <FriendsText>
          Wumpus is waiting on friends. You don't have though!
        </FriendsText>
        <FriendsSmallText>
          Try adding a friend with their username, or scan to see who is nearby.
        </FriendsSmallText>
        <CustomMiniTouchable title="Add Friend" fontSize="12px" />
      </FriendsSection>
    </DefaultContainer>
  );
}
