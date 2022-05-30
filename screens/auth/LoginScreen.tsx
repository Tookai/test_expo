import { Text } from "native-base";
import React from "react";
import { ScreenContainer } from "react-native-screens";

interface IProps {}

const LoginScreen = ({}: IProps) => {
  return (
    <ScreenContainer>
      <Text>LoginScreen</Text>
    </ScreenContainer>
  );
};

export default LoginScreen;
