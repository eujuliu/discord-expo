import styled from "styled-components/native";

export const UserProfileContainer = styled.View`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 180px;
  background-color: #2f3136;
`;

export const UserSettingsBanner = styled.View`
  width: 100%;
  height: 80px;
  background-color: #c1e3cc;
`;

export const UserProfileImageContainer = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  border: 4.5px solid #2f3136;
  border-radius: 100px;
`;

export const UserProfileImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const UserProfileStatus = styled.View`
  width: 30px;
  height: 30px;
  border: 3px solid #2f3136;
  border-radius: 100px;
  background-color: #3ba55c;
  position: absolute;
  right: -4px;
  bottom: -4px;
`;

export const UserProfileName = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px 20px;
`;

export const UserProfileNameHashtag = styled.Text`
  color: #b9bbbe;
  font-weight: 600;
`;
