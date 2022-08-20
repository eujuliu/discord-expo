import styled from "styled-components/native";

interface TouchableProps {
  backgroundColor: string;
  margin?: string;
  padding?: string;
}

interface TouchableTextProps {
  fontSize?: string;
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || "#5865f2"};
  margin: ${(props) => props.margin || "10px 0 0"};
  padding: ${(props) => props.padding || "13px"};
`;

export const TouchableText = styled.Text<TouchableTextProps>`
  color: #fff;
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: bold;
`;
