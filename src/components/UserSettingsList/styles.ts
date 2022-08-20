import styled from "styled-components/native";

export const UserSettingListContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
`;

export const UserSettingListText = styled.Text`
  color: #b9bbbd;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  margin: 17px 0 30px;
`;

export const UserSettingsTouchable = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  padding-bottom: 30px;
`;

export const UserSettingsTouchableText = styled.Text`
  color: #edeeef;
  font-size: 15px;
  font-weight: 500;
`;

export const SetStatusContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  margin-right: 10px;
`;

export const CircleStatusColor = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 20px;
  background-color: #3ba55c;
  margin-right: 25px;
`;

export const SetStatusText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
