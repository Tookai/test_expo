import { Text, View, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

const SettingsDrawer = () => {
  return (
    <SafeAreaView>
      <VStack alignItems={"center"} justifyContent={"center"} space={10}>
        <View>
          <Text>Settings</Text>
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default SettingsDrawer;
