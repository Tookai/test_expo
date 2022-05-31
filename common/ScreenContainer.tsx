import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  Divider,
  Flex,
  StatusBar,
  Text,
  useColorModeValue,
  View,
  VStack,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ThemeToggle from "../components/atom/ThemeToggle";
import BotTabNav from "../components/molecule/BotTabNav";
import { useAuth } from "../contexts/auth";

interface IProps {
  children: React.ReactNode;
  title: string;
}

const ScreenContainer = ({ children, title }: IProps) => {
  const { logout } = useAuth();

  return (
    <Box w={"full"} h={"full"}>
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
              <Flex w={"20%"} justifyContent={"center"} alignItems={"center"}>
                <AntDesign
                  name="logout"
                  size={24}
                  color={useColorModeValue("black", "white")}
                  onPress={logout}
                />
              </Flex>
              <Flex w={"60%"} justifyContent={"center"}>
                <Text
                  fontWeight={"bold"}
                  textAlign={"center"}
                  fontSize={"xl"}
                  color={useColorModeValue("black", "white")}
                >
                  {title}
                </Text>
              </Flex>
              <Flex w={"20%"} justifyContent={"center"} alignItems={"center"}>
                <ThemeToggle />
              </Flex>
            </Flex>
          </VStack>
        </SafeAreaView>
        <Divider mb={2} />
      </Flex>

      <View flex={1} bg={useColorModeValue("bgLight", "bgDark")} px={8}>
        {children}
      </View>
      <BotTabNav />
    </Box>
  );
};

export default ScreenContainer;
