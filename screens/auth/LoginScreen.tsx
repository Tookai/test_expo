import { useNavigation } from "@react-navigation/native";
import { Button, Input, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";
import DrawerContainer from "../../common/DrawerContainer";
import { useAuth } from "../../contexts/auth";
import { AuthParams } from "../../navigation/authRoutes";

interface IProps {}

const LoginScreen = ({}: IProps) => {
  const navigation = useNavigation<NavigationStackProp<AuthParams>>();
  const { user, login, loading, error } = useAuth();

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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => login("Tookai", "123456")}
        >
          <Button isLoading={loading}>LOGIN</Button>
        </TouchableOpacity>
      </VStack>

      {user && <Text>{user.username}</Text>}

      <Button
        margin={10}
        onPressOut={() => navigation.navigate("Register")}
        colorScheme={"coolGray"}
      >
        Dont have an account ?
      </Button>
    </DrawerContainer>
  );
};

export default LoginScreen;
