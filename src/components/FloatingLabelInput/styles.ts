import styled from "styled-components/native";

interface FloatingLabelProps {
  isFocused: boolean;
  isNotEmpty: boolean;
}

export const CustomInputContainer = styled.View`
  background-color: #202225;
  width: 100%;
  border-radius: 5px;
  padding: 13px;
  margin: 10px 0;
`;

export const FloatingLabel = styled.Text<FloatingLabelProps>`
  position: absolute;
  top: ${(props) => (props.isFocused || props.isNotEmpty ? 0 : "18px")};
  left: 13px;
  font-size: ${(props) =>
    props.isFocused || props.isNotEmpty ? "10px" : "14px"};
  color: ${(props) =>
    props.isFocused || props.isNotEmpty ? "#9fa1a5" : "#fff"};
  padding: ${(props) => (props.isFocused || props.isNotEmpty ? "5px" : 0)} 0;
`;

export const Input = styled.TextInput`
  font-size: 14px;
  color: #fff;
`;
