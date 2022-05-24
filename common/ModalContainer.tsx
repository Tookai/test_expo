import { useColorModeValue, VStack } from "native-base";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: IProps) => {
  return (
    <VStack h={"100%"} bg={useColorModeValue("bgLight", "bgDark")} p={2} px={8}>
      {children}
    </VStack>
  );
};

export default ModalContainer;
