import React from "react";

import { ContainerHeader, Button, NameView } from "./styles";

interface IPropsHeaderContent {
  nameView: string;
}

const HeaderContent: React.FC<IPropsHeaderContent> = ({
  nameView,
}) => {
  return (
    <ContainerHeader>
      <Button>
        <NameView>{nameView}</NameView>
      </Button>
    </ContainerHeader>
  );
};

export default HeaderContent;
