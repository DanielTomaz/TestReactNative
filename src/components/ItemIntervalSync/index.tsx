import React from "react";

import { TouchableSync, TextSecondsSync } from "./styles";

interface IPropsItemIntervalSync {
  text: string;
  isBorderColor: boolean;
  onPress(): void;
}

const ItemIntervalSync: React.FC<IPropsItemIntervalSync> = ({
  text,
  isBorderColor,
  onPress,
}) => {
  return (
    <TouchableSync onPress={onPress} isBorderColor={isBorderColor}>
      <TextSecondsSync>{text}</TextSecondsSync>
    </TouchableSync>
  );
};

export default ItemIntervalSync;
