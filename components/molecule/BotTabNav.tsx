import {
  AntDesign,
  Feather,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Flex, useColorModeValue } from "native-base";
import React from "react";

const BotTabNav = () => {
  const navigation = useNavigation<any>();

  return (
    <Flex
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      h={"auto"}
      _dark={{
        bg: "bgDark",
      }}
      _light={{
        bg: "bgLight",
      }}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Main")}
      >
        <AntDesign
          name="home"
          size={40}
          color={useColorModeValue("black", "white")}
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Users")}
      >
        <Feather
          name="users"
          size={40}
          color={useColorModeValue("black", "white")}
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Comments")}
      >
        <Foundation
          name="comments"
          size={40}
          color={useColorModeValue("black", "white")}
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Photos")}
      >
        <FontAwesome5
          name="photo-video"
          size={40}
          color={useColorModeValue("black", "white")}
        />
      </Flex>
    </Flex>
  );
};

export default BotTabNav;
