import styled from "styled-components/native";

export const ServerCategoryItemTouchable = styled.TouchableOpacity`
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

export const ServerCategoryItemContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`;

export const ServerCategoryItemText = styled.Text`
  color: #dcddde;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
