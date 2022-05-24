import { useNavigation } from "@react-navigation/native";
import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  comment: {
    name: string;
    email: string;
    body: string;
    id: number;
    postId: number;
  };
}

const Comment = ({ comment }: IProps) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("CommentModal")}
    >
      <View
        m={2}
        borderWidth={2}
        borderColor={"amber.100"}
        p={2}
        rounded={"lg"}
      >
        <Text>{comment.name}</Text>
        <Text>{comment.email}</Text>
        <Text>{comment.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Comment;
