import styled from "styled-components/native";

interface CustomTouchableProps {
  backgroundColor: string;
}

export const Touchable = styled.TouchableOpacity<CustomTouchableProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13px;
  margin-top: 10px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  width: 100%;
`;

export const CustomTouchableText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  font-family: Uni-Sans-Regular;
`;
