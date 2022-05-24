import axios from "axios";
import { FlatList, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView } from "react-native";
import ScreenContainer from "../common/ScreenContainer";
import Comment from "../components/atom/Comment";

const CommentScreen = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data);
    });
  };

  const refresh = () => {
    setRefreshing(true);
    setComments([]);

    setTimeout(() => {
      getComments();
      setRefreshing(false);
    }, 3000);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <ScreenContainer title={"Comments"}>
      <SafeAreaView>
        <VStack h={"100%"} alignItems={"center"} justifyContent={"center"}>
          <FlatList
            data={comments}
            renderItem={({ item, index }) => (
              <Comment key={index} comment={item} />
            )}
            keyExtractor={(item, index) => String(index)}
            initialNumToRender={10}
            onEndReached={() => getComments()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refresh}
                tintColor={"blue"}
              />
            }
            ListEmptyComponent={
              <Text textAlign={"center"}>
                The comments are loading please wait.
              </Text>
            }
          />
        </VStack>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default CommentScreen;
