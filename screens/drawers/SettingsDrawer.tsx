import { Text, View } from "native-base";
import React from "react";
import DrawerContainer from "../../common/DrawerContainer";

const SettingsDrawer = () => {
  return (
    <DrawerContainer title={"Settings"}>
      <View>
        <Text>Settings</Text>
      </View>
    </DrawerContainer>
  );
};

export default SettingsDrawer;
