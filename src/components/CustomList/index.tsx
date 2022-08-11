import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
  CustomListText,
  ListTouchable,
  ListTouchableContainer,
  ListTouchableText,
} from "./styles";

interface CustomListProps {
  data: { image: string; label: string }[];
}

interface CustomListItemProps extends TouchableOpacityProps {
  image: string;
  label: string;
}

export function CustomList({ data }: CustomListProps) {
  return (
    <ScrollView
      style={{ width: "100%", height: 474, marginTop: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <CustomListItem image={data[0].image} label={data[0].label} />
      <CustomListText>START FROM A TEMPLATE</CustomListText>
      {data.map((value, index) => {
        if (index === 0) return;
        return <CustomListItem image={value.image} label={value.label} />;
      })}
    </ScrollView>
  );
}

export function CustomListItem({ image, label }: CustomListItemProps) {
  return (
    <ListTouchable key={label}>
      <ListTouchableContainer>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/jjuliomarttins/discord-expo/main/assets/images/${image}`,
          }}
          accessibilityLabel={label}
          style={{ width: 45, height: 45 }}
        />
        <ListTouchableText>{label}</ListTouchableText>
      </ListTouchableContainer>
      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </ListTouchable>
  );
}
