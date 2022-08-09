import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const ModalPressable = styled.Pressable`
  flex: 1;
  background-color: #000;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 8px 0;
  width: 250px;
  height: 300px;
  background-color: #36393f;
  top: ${Math.round(Dimensions.get("window").height / 2 - 150)}px;
  left: ${Math.round(Dimensions.get("window").width / 2 - 125)}px;
`;

export const ModalTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  width: 100%;
`;

export const ModalSubmitButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  border-radius: 5px;
  background-color: #5865f2;
  margin: 0 auto;
  padding: 10px;
`;

export const ModalSubmitButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
