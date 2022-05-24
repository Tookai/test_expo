import { Text, View, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";


const ProfileDrawer = () => {
  return (
    <SafeAreaView>
      <VStack
        alignItems={"center"}
        justifyContent={"center"}
        space={10}
      >
        <View>
          <Text>Profile</Text>
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default ProfileDrawer;
