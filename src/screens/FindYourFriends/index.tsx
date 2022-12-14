import React from "react";
import { Image, Linking, TouchableOpacity } from "react-native";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CustomCheckBox } from "@components/CustomCheckBox";
import { CustomTouchable } from "@components/CustomTouchable";

import { DefaultContainer, DefaultScreenTitle } from "@assets/styles/global";
import {
  FindYourFriendsLink,
  FindYourFriendsSection,
  FindYourFriendsSmallText,
  SkipButtonContainer,
  SkipButtonText,
} from "./styles";

interface FindYourFriendsScreenProps
  extends NativeStackScreenProps<RootStackParamList, "FindYourFriends"> {}

export function FindYourFriends({ navigation }: FindYourFriendsScreenProps) {
  return (
    <DefaultContainer
      hasBackgroundColor={true}
      extraStyles={"justify-content: space-between"}
    >
      <SkipButtonContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateYourServer")}
        >
          <SkipButtonText>SKIP</SkipButtonText>
        </TouchableOpacity>
      </SkipButtonContainer>

      <FindYourFriendsSection>
        <Image
          source={require("@assets/images/find-your-friends-art.png")}
          accessibilityLabel="Find your friends"
          resizeMode="contain"
          style={{ width: 250, height: 145 }}
        />
        <DefaultScreenTitle>Find your friends</DefaultScreenTitle>
        <FindYourFriendsSmallText>
          Discord can connect you with your friends and help them find you.
        </FindYourFriendsSmallText>
      </FindYourFriendsSection>

      <FindYourFriendsSection>
        <CustomTouchable
          title="Get Started"
          fontSize="13px"
          margin="0 auto"
          padding="10px"
        />
        <CustomCheckBox title="Allow contacts to add me" />
        <FindYourFriendsSmallText
          fontSize={11.2}
          textAlign="left"
          width={98}
          margin="5px 0"
        >
          Allow someone to add you if they have your phone number saved in their
          phone contacts. (Email coming soon!)
        </FindYourFriendsSmallText>

        <FindYourFriendsSmallText
          fontSize={11.2}
          textAlign="left"
          width={98}
          margin="5px 0 15px 0"
        >
          Your contacts will be regularly sent to us. This can be changed
          anytime in settings.
          <FindYourFriendsLink
            onPress={() =>
              Linking.openURL("https://github.com/jjuliomarttins/discord-expo")
            }
          >
            Learn more
          </FindYourFriendsLink>
        </FindYourFriendsSmallText>
      </FindYourFriendsSection>
    </DefaultContainer>
  );
}
