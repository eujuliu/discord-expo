import styled from "styled-components/native";

interface DefaultContainerProps {
  hasBackgroundColor: boolean;
  extraStyles?: string;
}

interface DefaultScreenTitleProps {
  margin?: string;
}

export const DefaultContainer = styled.View<DefaultContainerProps>`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${(props) =>
    props.hasBackgroundColor ? "#36393f" : undefined};
  padding: 35px 15px 10px;
  ${(props) => props.extraStyles}
`;

export const DefaultLink = styled.Text`
  font-size: 11px;
  color: #01aef1;
  width: 100%;
  margin-bottom: 10px;
`;

export const DefaultScreenTitle = styled.Text<DefaultScreenTitleProps>`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: ${(props) => props.margin || "20px 0"};
`;

export const DefaultFormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
