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
import Swiper from "react-native-web-swiper";
import ThemeToggle from "../components/atom/ThemeToggle";
import BotTabNav from "../components/molecule/BotTabNav";
import ProfileDrawer from "../screens/drawers/ProfileDrawer";
import SettingsDrawer from "../screens/drawers/SettingsDrawer";

interface IProps {
  children: React.ReactNode;
  title: string;
}

const ScreenContainer = ({ children, title }: IProps) => {
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
        <Divider />
      </Flex>
      {/* <Swiper
        from={1}
        minDistanceForAction={0.25}
        minDistanceToCapture={20}
        controlsEnabled={false}
      >
        <View flex={1}>
          <ProfileDrawer />
        </View>
        <> */}
          <View flex={1} bg={useColorModeValue("bgLight", "bgDark")} px={8}>
            {children}
          </View>
          <BotTabNav />
        {/* </>
        <View flex={1}>
          <SettingsDrawer />
        </View>
      </Swiper> */}
    </Box>
  );
};

export default ScreenContainer;
