import styled from "styled-components/native";

interface DefaultContainerProps {
  hasBackgroundColor: boolean;
}

export const DefaultContainer = styled.View<DefaultContainerProps>`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${(props) =>
    props.hasBackgroundColor ? "#36393f" : undefined};
  padding: 35px 15px 10px;
`;

export const DefaultLink = styled.Text`
  font-size: 11px;
  font-family: Uni-Sans-Regular;
  color: #01aef1;
  width: 100%;
  margin-bottom: 10px;
`;

export const DefaultFormTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: Uni-Sans-Regular;
  color: #fff;
  margin: 20px 0;
  font-family: UniSansRegular;
`;

export const DefaultFormContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
