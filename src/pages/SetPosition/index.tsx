import React, { useState, useEffect } from "react";
import { Switch, PermissionsAndroid, Text } from "react-native";
import Geolocation from '@react-native-community/geolocation';

import {
  ContainerSafeArea,
  ContainerIdentityApp,
  ContainerLogoApp,
  ContainerTextIdentityApp,
  IconCompass,
  TextIdentity,
  ContainerStatusService,
  ContainerTextStatus,
  ContainerButtonActiveStatus,
  TextDescriptionStatus,
  TextServicesStatus,
  ContainerButtonsSync,
} from "./styles";

import ItemIntervalSync from "../../components/ItemIntervalSync";
import HeaderContent from "../../components/HeaderContent";

const SetPosition: React.FC = () => {
  const [isActivityItemTenSecondsSync, setIsActivityItemTenSecondsSync] =
    useState(false);

  const [isActivityItemFiveSecondsSync, setIsActivityItemFiveSecondsSync] =
    useState(false);

  const [isActivityItemThreeSecondsSync, setIsActivityItemThreeSecondsSync] =
    useState(false);

  const [isActivityItemOneSecondSync, setIsActivityItemOneSecondSync] =
    useState(false);

  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    verifyLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error.code, error.message);
        }
      );
    }
  }, [hasLocationPermission]); 


  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permission Granted");
        setHasLocationPermission(true);
      } else {
        console.error("Permission Denied");
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <ContainerSafeArea>
      <HeaderContent nameView="Sync" />
      <ContainerIdentityApp>
        <ContainerLogoApp>
          <IconCompass name="compass" size={70} color="#3a7ca5" />
        </ContainerLogoApp>
        <ContainerTextIdentityApp>
          <TextIdentity>My GPS - Tracking</TextIdentity>
        </ContainerTextIdentityApp>
      </ContainerIdentityApp>
      <ContainerStatusService>
        <ContainerTextStatus>
          <TextDescriptionStatus>Status do Serviço</TextDescriptionStatus>
          <TextServicesStatus>Serviço ativo</TextServicesStatus>
        </ContainerTextStatus>
        <ContainerButtonActiveStatus>
          <Switch
            trackColor={{ false: "#767577", true: "#9c9b9b" }}
            thumbColor={true ? "#4ecf4e" : "#b93333"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {}}
            value={true}
          />
        </ContainerButtonActiveStatus>
      </ContainerStatusService>
      <ContainerButtonsSync>
        <ItemIntervalSync
          onPress={() => setIsActivityItemTenSecondsSync((p) => !p)}
          text="10s"
          isBorderColor={isActivityItemTenSecondsSync}
        />
        <ItemIntervalSync
          onPress={() => setIsActivityItemFiveSecondsSync((p) => !p)}
          text="5s"
          isBorderColor={isActivityItemFiveSecondsSync}
        />
        <ItemIntervalSync
          onPress={() => setIsActivityItemThreeSecondsSync((p) => !p)}
          text="3s"
          isBorderColor={isActivityItemThreeSecondsSync}
        />
        <ItemIntervalSync
          onPress={() => setIsActivityItemOneSecondSync((p) => !p)}
          text="1s"
          isBorderColor={isActivityItemOneSecondSync}
        />
      </ContainerButtonsSync>
    </ContainerSafeArea>
  );
};

export default SetPosition;
