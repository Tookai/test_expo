import { useNavigation } from "@react-navigation/native";
import { Button, Input, VStack } from "native-base";
import React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import DrawerContainer from "../../common/DrawerContainer";
import { AuthParams } from "../../navigation/authRoutes";

interface IProps {}

const LoginScreen = ({}: IProps) => {
  const navigation = useNavigation<NavigationStackProp<AuthParams>>();

  return (
    <DrawerContainer title={"Login"}>
      <VStack
        space={2}
        alignContent={"center"}
        justifyContent={"center"}
        flex={1}
      >
        <Input fontSize={20} placeholder="username" type={"text"} />
        <Input fontSize={20} placeholder="password" type={"password"} />
      </VStack>

      <Button margin={10} onPressOut={() => navigation.navigate("Register")}>
        Dont have an account ?
      </Button>
    </DrawerContainer>
  );
};

export default LoginScreen;
