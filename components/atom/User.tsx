import { Flex, Text } from "native-base";
import React from "react";

interface IProps {
  user: {
    name: string;
    email: string;
    username: string;
    id: number;
  };
}

const User = ({ user }: IProps) => {
  return (
    <Flex m={2} borderWidth={2} borderColor={"amber.100"} p={2} rounded={"lg"}>
      <Text flex={1}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.username}</Text>
    </Flex>
  );
};

export default User;
