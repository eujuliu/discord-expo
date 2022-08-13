import styled from "styled-components/native";

export const ServerListAside = styled.View`
  display: flex;
  align-items: center;
  width: 19%;
  height: 100%;
  background-color: #202225;
  padding-top: 35px;
`;

export const ServerListMessagesTouchable = styled.TouchableOpacity`
  background-color: #5865f2;
  border-radius: 20px;
  padding: 15px;
`;

export const TouchableFocusedIndicator = styled.View`
  position: absolute;
  top: 5px
  left: -22px;

  background-color: #fff;
  border-radius: 10px;
  width: 15px;
  height: 38px;
`;

export const ServerListDivider = styled.View`
  width: 32px;
  height: 1px;
  background-color: #32363b;
  margin: 8px 0;
`;

export const NewServerButton = styled.Pressable`
  background-color: #2f3136;
  padding: 8px 10px;
  border-radius: 100px;
`;

export const ServerHelp = styled.Pressable`
  padding: 0px 1px;
  margin: 15px 0;
  background-color: #4f545c;
  border-radius: 100px;
`;

export const ServerListSection = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81%;
  height: 100%;

  padding: 15px;
`;

export const ServerListText = styled.Text`
  color: #cccecf;
  font-weight: bold;
  width: 90%;
  text-align: center;
`;

export const ServerListSmallText = styled.Text`
  color: #9fa1a4;
  font-weight: 500;
  font-size: 13px;
  width: 100%;
  text-align: center;
  margin: 10px 0 40px;
`;
