import styled from "styled-components/native";

export const CustomListText = styled.Text`
  color: #b9bbbe;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  margin: 3px 0 10px;
`;

export const ListTouchable = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  background-color: #292b2f;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 8px;
  width: 100%;
`;

export const ListTouchableContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`;

export const ListTouchableText = styled.Text`
  color: #dcddde;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
