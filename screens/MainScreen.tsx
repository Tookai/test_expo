import { useNavigation } from "@react-navigation/native";
import { Button, Text, View, VStack } from "native-base";
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
        <View>
          <Text>Hello</Text>

          <Button onPress={() => navigation.navigate("Feed")}>
            Go to feed
          </Button>
        </View>
        <ThemeToggle />
      </VStack>
    </SafeAreaView>
  );
};

export default MainScreen;
