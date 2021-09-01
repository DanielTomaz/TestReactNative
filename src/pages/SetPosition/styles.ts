import styled from "styled-components/native";
import { Dimensions, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const ContainerSafeArea = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #d9dcd6;
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

export const ContainerStatusService = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: ${width * 1}px;
`;

export const ContainerTextStatus = styled.View`
  align-items: center;
  flex-direction: column;
`;

export const ContainerButtonActiveStatus = styled.View`
  align-items: center;
`;

export const TextDescriptionStatus = styled.Text`
  font-size: 18px;
  color: #3a7ca5;
  font-weight: 300;
`;

export const TextServicesStatus = styled.Text`
  font-size: 16px;
  color: #3a7ca5;
  font-weight: 300;
`;

export const ContainerButtonsSync = styled.View`
  flex-direction: row;
  padding: 40px;
`;
