import styled from "styled-components/native";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const ContainerItemList = styled.View`
  display: flex;
  flex-direction: row;
  width: ${width * 0.9}px;
  height: 60px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 10px;
  background-color: #e9e9e9;
  margin: 5px auto 5px;
`;

export const ContainerDataList = styled.View`
  width: ${width * 0.45}px;
  justify-content: space-between;
`;

export const ContainerHourList = styled.View`
  width: ${width * 0.45}px;
`;

export const TextId = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;

export const TextStatus = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: 300;
`;
