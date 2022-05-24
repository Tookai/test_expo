import {
  AntDesign,
  Feather,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex, useColorModeValue } from "native-base";
import React from "react";

const BotTabNav = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const isCurrentRoute = (routeName: string) => {
    return route.name === routeName;
  };

  return (
    <Flex
      flexDirection={"row"}
      alignItems={"center"}
      h={"auto"}
      _dark={{
        bg: "bgDark",
      }}
      _light={{
        bg: "bgLight",
      }}
      borderTopWidth={2}
      borderTopColor={useColorModeValue("black", "white")}
    >
      <Flex
        flex={isCurrentRoute("Main") ? 2 : 1}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Main")}
        bg={
          isCurrentRoute("Main")
            ? useColorModeValue("bgDark", "bgLight")
            : useColorModeValue("bgLight", "bgDark")
        }
        rounded={"lg"}
      >
        <AntDesign
          name="home"
          size={40}
          color={
            isCurrentRoute("Main")
              ? useColorModeValue("white", "black")
              : useColorModeValue("black", "white")
          }
        />
      </Flex>
      <Flex
        flex={isCurrentRoute("Users") ? 2 : 1}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Users")}
        bg={
          isCurrentRoute("Users")
            ? useColorModeValue("bgDark", "bgLight")
            : useColorModeValue("bgLight", "bgDark")
        }
        rounded={"lg"}
      >
        <Feather
          name="users"
          size={40}
          color={
            isCurrentRoute("Users")
              ? useColorModeValue("white", "black")
              : useColorModeValue("black", "white")
          }
        />
      </Flex>
      <Flex
        flex={isCurrentRoute("Comments") ? 2 : 1}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Comments")}
        bg={
          isCurrentRoute("Comments")
            ? useColorModeValue("bgDark", "bgLight")
            : useColorModeValue("bgLight", "bgDark")
        }
        rounded={"lg"}
      >
        <Foundation
          name="comments"
          size={40}
          color={
            isCurrentRoute("Comments")
              ? useColorModeValue("white", "black")
              : useColorModeValue("black", "white")
          }
        />
      </Flex>
      <Flex
        flex={isCurrentRoute("Photos") ? 2 : 1}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        m={2}
        onTouchEnd={() => navigation.navigate("Photos")}
        bg={
          isCurrentRoute("Photos")
            ? useColorModeValue("bgDark", "bgLight")
            : useColorModeValue("bgLight", "bgDark")
        }
        rounded={"lg"}
      >
        <FontAwesome5
          name="photo-video"
          size={40}
          color={
            isCurrentRoute("Photos")
              ? useColorModeValue("white", "black")
              : useColorModeValue("black", "white")
          }
        />
      </Flex>
    </Flex>
  );
};

export default BotTabNav;
