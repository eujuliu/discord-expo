import styled from "styled-components/native";

interface FloatingLabelContainerProps {
  width: string;
}

interface FloatingLabelProps {
  isFloating: boolean;
}

export const FloatingLabelContainer = styled.View<FloatingLabelContainerProps>`
  background-color: #202225;
  width: ${(props) => props.width};
  border-radius: 5px;
  padding: 13px;
  margin: 10px 0;
`;

export const FloatingLabel = styled.Text<FloatingLabelProps>`
  position: absolute;
  top: ${(props) => (props.isFloating ? 0 : "18px")};
  left: 13px;
  font-size: ${(props) => (props.isFloating ? "10px" : "14px")};
  color: ${(props) => (props.isFloating ? "#9fa1a5" : "#fff")};
  padding: ${(props) => (props.isFloating ? "5px" : 0)} 0;
`;

export const Input = styled.TextInput`
  font-size: 14px;
  color: #fff;
`;
