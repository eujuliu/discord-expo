import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface TabBarFriendsIconProps {
  focused: boolean;
}

export function TabBarFriendsIcon({ focused }: TabBarFriendsIconProps) {
  return (
    <Svg width={22} height={18} fill="none">
      <Path
        d="M13.129 8.822c2.274 0 3.673-1.6 3.673-3.733s-1.4-3.733-3.673-3.733c-2.274 0-3.673 1.6-3.673 3.733s1.399 3.733 3.673 3.733Z"
        fill={focused ? "#FFF" : "#686A6D"}
      />
      <Path
        d="M6.307 17H21v-2.667s-2.274-3.2-6.472-3.2-5.422-.77-7.871-2.844C4.208 6.215 4.557 1 4.557 1H1.06s-.4 3.378.875 6.4c1.274 3.022 4.373 4.978 4.373 4.978V17Z"
        fill={focused ? "#FFF" : "#686A6D"}
      />
      <Path
        d="M13.129 8.822c2.274 0 3.673-1.6 3.673-3.733s-1.4-3.733-3.673-3.733c-2.274 0-3.673 1.6-3.673 3.733s1.399 3.733 3.673 3.733Z"
        stroke={focused ? "#FFF" : "#686A6D"}
      />
      <Path
        d="M6.307 17H21v-2.667s-2.274-3.2-6.472-3.2-5.422-.77-7.871-2.844C4.208 6.215 4.557 1 4.557 1H1.06s-.4 3.378.875 6.4c1.274 3.022 4.373 4.978 4.373 4.978V17Z"
        stroke={focused ? "#FFF" : "#686A6D"}
      />
    </Svg>
  );
}
