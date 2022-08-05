import styled from "styled-components/native";

interface CustomPressableProps {
  backgroundColor: string;
}

export const CustomPressable = styled.Pressable<CustomPressableProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13px;
  margin-bottom: 10px;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  width: 100%;
`;

export const CustomPressableText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
