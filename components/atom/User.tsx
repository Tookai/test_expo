import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flex, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AppParams } from "../../navigation";

interface IProps {
  user: {
    name: string;
    email: string;
    username: string;
    id: number;
  };
}

const User = ({ user }: IProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppParams>>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("UserModal")}
    >
      <Flex
        m={2}
        borderWidth={2}
        borderColor={"amber.100"}
        p={2}
        rounded={"lg"}
      >
        <Text flex={1}>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.username}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

export default User;
