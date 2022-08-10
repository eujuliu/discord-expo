import React from "react";
import { Image, Linking } from "react-native";

import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ReturnButton } from "@components/ReturnButton";

import { DefaultContainer } from "@assets/styles/global";
import { CustomTouchable } from "@components/CustomTouchable";
import { CaptchaLink, CaptchaSmallText, CaptchaTitle } from "./styles";

interface CaptchaScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Captcha"> {}

export function Captcha({ navigation }: CaptchaScreenProps) {
  return (
    <DefaultContainer hasBackgroundColor={true}>
      <ReturnButton onPress={() => navigation.goBack()} />
      <Image
        source={require("@assets/images/captcha-animation.gif")}
        style={{ width: 270, height: 205 }}
        resizeMode="contain"
      />
      <CaptchaTitle>Verify by hCaptcha</CaptchaTitle>
      <CaptchaSmallText>We need to know you're not a robo.</CaptchaSmallText>
      <CaptchaLink
        onPress={() =>
          Linking.openURL("https://github.com/jjuliomarttins/discord-expo")
        }
      >
        Having issues with CAPTCHA?
      </CaptchaLink>
      <CustomTouchable
        title="Verify"
        backgroundColor="#5865f2"
        onPress={() => navigation.navigate("FindYourFriends")}
      />
    </DefaultContainer>
  );
}
