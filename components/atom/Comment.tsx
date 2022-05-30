import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppParams } from "../../navigation/appRoutes";


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
  const navigation = useNavigation<NativeStackNavigationProp<AppParams>>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("CommentModal", { commentId: comment.id })}
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
