import styled from "styled-components/native";

interface DefaultContainerProps {
  hasBackgroundColor: boolean;
}

export const DefaultContainer = styled.View<DefaultContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.hasBackgroundColor ? "#2f3237" : undefined};
  padding: 35px 10px 10px;
`;

export const DefaultLink = styled.Text`
  font-size: 11px;
  color: #01aef1;
  width: 100%;
  margin-bottom: 10px;
`;

export const DefaultFormTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 20px 0;
`;

export const DefaultFormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
