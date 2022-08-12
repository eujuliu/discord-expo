import styled from "styled-components/native";

interface FindYourFriendsSmallTextProps {
  fontSize?: number;
  textAlign?: string;
  width?: number;
  margin?: string;
}

export const SkipButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

export const SkipButtonText = styled.Text`
  color: #f6f6f7;
  font-weight: 700;
`;

export const FindYourFriendsSection = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FindYourFriendsSmallText = styled.Text<FindYourFriendsSmallTextProps>`
  color: #bbb;
  font-weight: 400;
  font-size: ${(props) => props.fontSize || 13}px;
  text-align: ${(props) => props.textAlign || "center"};
  width: ${(props) => props.width || 95}%;
  margin: ${(props) => props.margin || "-13px 0 10px 0"};
`;

export const FindYourFriendsLink = styled.Text`
  font-size: 11.2px;
  color: #01aef1;
  width: 100%;
  text-align: center;
`;
