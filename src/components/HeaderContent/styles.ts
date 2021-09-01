import styled from "styled-components/native";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: ${width * 1}px;
  height: 80px;
  background-color: #2f6690;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const NameView = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
