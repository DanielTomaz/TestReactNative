import styled from "styled-components/native";
import { Dimensions, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const ContainerSafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #d9dcd6;
`;

export const Scroll = styled(ScrollView)``;

export const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerIdentityApp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width * 1}px;
  height: 150px;
  margin-top: 20px;
`;

export const ContainerLogoApp = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContainerTextIdentityApp = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconCompass = styled(Feather)`
  padding: 10px 10px 10px 0;
`;

export const TextIdentity = styled.Text`
  font-size: 22px;
  color: #16425b;
  font-weight: bold;
`;
