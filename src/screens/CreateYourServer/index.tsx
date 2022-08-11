import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { CustomList } from "@components/CustomList";
import { CustomMiniTouchable } from "@components/CustomMiniTouchable";

import { DefaultContainer, DefaultScreenTitle } from "@assets/styles/global";
import {
  CloseButton,
  CreateYourServerFooter,
  CreateYourServerFooterText,
  CreateYourServerOptions,
  CreateYourServerSmallText,
} from "./styles";

interface CreateYourServerProps
  extends NativeStackScreenProps<RootStackParamList, "CreateYourServer"> {}

export function CreateYourServer({ navigation }: CreateYourServerProps) {
  const customListData = [
    { image: "create-my-own.png", label: "Create My Own" },
    { image: "gaming.png", label: "Gaming" },
    { image: "school-club.png", label: "School Club" },
    { image: "study-group.png", label: "Study Group" },
    { image: "friends.png", label: "Friends" },
    { image: "artist-and-creators.png", label: "Artist & Creators" },
    { image: "local-community.png", label: "Local Community" },
  ];

  return (
    <DefaultContainer hasBackgroundColor={true}>
      <CloseButton>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </CloseButton>
      <DefaultScreenTitle margin="10px 0">
        Create Your Server
      </DefaultScreenTitle>
      <CreateYourServerSmallText>
        Your server is where you and friends hang out. Make yours and start
        talking.
      </CreateYourServerSmallText>
      <CreateYourServerOptions>
        <CustomList data={customListData} />
      </CreateYourServerOptions>
      <CreateYourServerFooter>
        <CreateYourServerFooterText>
          Have an invite already?
        </CreateYourServerFooterText>
        <CustomMiniTouchable
          title="Join a friend on Discord"
          backgroundColor="#4f545c"
          fontSize="12px"
        />
      </CreateYourServerFooter>
    </DefaultContainer>
  );
}
