import {
  Divider,
  Flex,
  StatusBar,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  children: React.ReactNode;
  title: string;
}

const DrawerContainer = ({ title, children }: IProps) => {
  return (
    <>
      <Flex backgroundColor={useColorModeValue("bgLight", "bgDark")}>
        <StatusBar
          animated
          barStyle={useColorModeValue("dark-content", "light-content")}
        />
        <SafeAreaView>
          <VStack w={"full"} h={"50px"}>
            <Flex
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"full"}
            >
              <Flex w={"100%"} justifyContent={"center"}>
                <Text
                  fontWeight={"bold"}
                  textAlign={"center"}
                  fontSize={"xl"}
                  color={useColorModeValue("black", "white")}
                >
                  {title}
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </SafeAreaView>
        <Divider />
      </Flex>
      <VStack flex={1} bg={useColorModeValue("bgLight", "bgDark")} p={2} px={8}>
        {children}
      </VStack>
    </>
  );
};

export default DrawerContainer;
