import { Text, View, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ThemeToggle from "../components/atom/ThemeToggle";

const MainScreen = () => {
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
        <View>
          
          <Text>Hello</Text>
        </View>
        <ThemeToggle />
      </VStack>
    </SafeAreaView>
  );
};

export default MainScreen;
