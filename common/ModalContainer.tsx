import { useColorModeValue, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: IProps) => {
  return (
    <SafeAreaView>
      <VStack h={"100%"} bg={useColorModeValue("bgLight", "bgDark")} px={8}>
        {children}
      </VStack>
    </SafeAreaView>
  );
};

export default ModalContainer;
