import styled from "styled-components/native";

interface StyledProps {
  isBorderColor: boolean;
}

export const TouchableSync = styled.TouchableOpacity`
  height: ${({ isBorderColor }: StyledProps) =>
    isBorderColor ? "65px" : "60px"};
  width: ${({ isBorderColor }: StyledProps) =>
    isBorderColor ? "65px" : "60px"};
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${({ isBorderColor }: StyledProps) =>
      isBorderColor ? "#225073" : "#2f6690"};
  border-radius: 5px;
  margin-right: 15px;
  background-color: ${({ isBorderColor }: StyledProps) =>
    isBorderColor ? "#225073" : "#2f6690"}; ;
`;

export const TextSecondsSync = styled.Text`
  color: #fff;
  font-weight: 300;
`;
