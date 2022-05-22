import { Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

const UserModal = () => {
  return (
    <VStack
      h={"100%"}
      _dark={{
        bg: "bgDark",
      }}
      _light={{
        bg: "bgLight",
      }}
    >
      <SafeAreaView>
        <Text>UserModal</Text>
      </SafeAreaView>
    </VStack>
  );
};

export default UserModal;
