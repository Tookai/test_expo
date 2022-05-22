import { useNavigation } from "@react-navigation/native";
import { Button, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ThemeToggle from "../components/atom/ThemeToggle";

const MainScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <VStack
        _dark={{
          bg: "bgDark",
        }}
        _light={{
          bg: "bgLight",
        }}
        height="100%"
        alignItems={"center"}
        justifyContent={"center"}
        space={10}
      >
        <Text>Hello</Text>

        <Button onPress={() => navigation.navigate("UserModal")}>
          Go to user
        </Button>

        <Button onPress={() => navigation.navigate("Settings")}>
          Go to right drawer
        </Button>

        <Button onPress={() => navigation.navigate("Profile")}>
          Go to left drawer
        </Button>

        <ThemeToggle />
      </VStack>
    </SafeAreaView>
  );
};

export default MainScreen;
