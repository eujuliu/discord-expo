import styled from "styled-components/native";

interface MiniTouchableProps {
  backgroundColor?: string;
}

interface MiniTouchableTextProps {
  fontSize?: string;
}

export const MiniTouchable = styled.TouchableOpacity<MiniTouchableProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || "#5865f2"};
  margin: 0 auto;
  padding: 10px;
`;

export const MiniTouchableText = styled.Text<MiniTouchableTextProps>`
  color: #fff;
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: bold;
`;
