import styled from "styled-components/native";

interface CustomSwitchTextProps {
  isSelected: boolean;
}

export const CustomSwitchContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 100%;
  background-color: #292b2f;
  border-radius: 5px;
  margin: 15px 0;
`;

export const CustomSwitchTouchable = styled.TouchableOpacity`
  width: 50%;
`;

export const CustomSwitchText = styled.Text<CustomSwitchTextProps>`
  text-align: center;
  font-weight: 600;
  width: 100%;
  padding: 10px;
  color: ${(props) => (props.isSelected ? "#FFF" : "#4f545c")};
  background-color: ${(props) => (props.isSelected ? "#4f545c" : "#292b2f")};
  border-radius: 5px;
`;
