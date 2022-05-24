import { Text, View } from "native-base";
import React from "react";
import DrawerContainer from "../../common/DrawerContainer";

const ProfileDrawer = () => {
  return (
    <DrawerContainer title={'Profile'}>
      <View>
        <Text>Profile</Text>
      </View>
    </DrawerContainer>
  );
};

export default ProfileDrawer;
