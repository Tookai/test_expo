import { Text, View } from "native-base";
import React from "react";

interface IProps {
  comment: {
    name: string;
    email: string;
    body: string;
    id: number;
    postId: number;
  };
}

const Comments = ({ comment }: IProps) => {
  return (
    <View m={2} borderWidth={2} borderColor={"amber.100"} p={2} rounded={"lg"}>
      <Text>{comment.name}</Text>
      <Text>{comment.email}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
};

export default Comments;
