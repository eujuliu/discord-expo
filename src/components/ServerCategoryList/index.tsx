import React from "react";
import { ScrollView } from "react-native";

import { ServerCategoryListText } from "./styles";
import { ServerCategoryListItem } from "@components/ServerCategoryItem";

interface ServerCategoryListProps {
  data: { image: string; label: string }[];
}

export function ServerCategoryList({ data }: ServerCategoryListProps) {
  return (
    <ScrollView
      style={{ width: "100%", height: 474, marginTop: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <ServerCategoryListItem image={data[0].image} label={data[0].label} />
      <ServerCategoryListText>START FROM A TEMPLATE</ServerCategoryListText>
      {data.map((value, index) => {
        if (index === 0) return;
        return (
          <ServerCategoryListItem
            key={value.label}
            image={value.image}
            label={value.label}
          />
        );
      })}
    </ScrollView>
  );
}
