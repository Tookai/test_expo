import { Text, View, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ThemeToggle from "../components/atom/ThemeToggle";

const SettingsDrawer = () => {
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
          <Text>Settings</Text>
        </View>
        <ThemeToggle />
      </VStack>
    </SafeAreaView>
  );
};

export default SettingsDrawer;
