import React from 'react';

import {
    ContainerItemList,
    ContainerDataList,
    ContainerHourList,
    TextId,
    TextStatus,
} from './styles';


const ItemGeolocatorList: React.FC = () => {
    return(
        <ContainerItemList>
        <ContainerDataList>
            <TextId>Pacote ID: XXXXX</TextId>
            <TextStatus>Sincronizado</TextStatus>
        </ContainerDataList>
        <ContainerHourList>
        </ContainerHourList>
    </ContainerItemList>
    );
}

export default ItemGeolocatorList;