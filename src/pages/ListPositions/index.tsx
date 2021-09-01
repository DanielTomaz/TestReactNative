import React from "react";

import {
  ContainerSafeArea,
  ContainerView,
  Scroll,
  ContainerIdentityApp,
  ContainerLogoApp,
  ContainerTextIdentityApp,
  IconCompass,
  TextIdentity,
} from "./styles";

import ItemGeolocatorList from "../../components/ItemGeolocationList";
import HeaderContent from "../../components/HeaderContent";

const ListPositions: React.FC = () => {
  return (
    <ContainerSafeArea>
      <ContainerView>
        <HeaderContent nameView="List"/>
        <Scroll>
          <ContainerIdentityApp>
            <ContainerLogoApp>
              <IconCompass name="compass" size={70} color="#3a7ca5" />
            </ContainerLogoApp>
            <ContainerTextIdentityApp>
              <TextIdentity>My GPS - Tracking</TextIdentity>
            </ContainerTextIdentityApp>
          </ContainerIdentityApp>
          <ItemGeolocatorList />
          <ItemGeolocatorList />
          <ItemGeolocatorList />
          <ItemGeolocatorList />
          <ItemGeolocatorList />
          <ItemGeolocatorList />
        </Scroll>
      </ContainerView>
    </ContainerSafeArea>
  );
};

export default ListPositions;
