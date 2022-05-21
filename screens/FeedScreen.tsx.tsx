import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FlatList, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView } from "react-native";
import User from "../components/atom/User";

const FeedScreen = () => {
  const navigation = useNavigation<any>();

  const [comments, setComments] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setComments(res.data);
    });
  };

  const getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers([...users, ...res.data]);
    });
  };

  const refresh = () => {
    setRefreshing(true);
    setComments([]);
    setUsers([]);

    setTimeout(() => {
      getComments();
      getUsers();
      setRefreshing(false);
    }, 3000);
  };

  useEffect(() => {
    getComments();
    getUsers();
  }, []);

  return (
    <SafeAreaView>
      <VStack
        _dark={{
          bg: "bgDark",
        }}
        _light={{
          bg: "bgLight",
        }}
        height="100%"
        alignItems={"center"}
        justifyContent={"center"}
 
      >
        <FlatList
          data={users}
          renderItem={({ item, index }) => <User key={index} user={item} />}
          keyExtractor={(item, index) => String(index)}
          initialNumToRender={10}
          onEndReached={() => getUsers()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refresh}
              tintColor={"blue"}
            />
          }
          ListEmptyComponent={<Text>The users are loading please wait.</Text>}
        />
      </VStack>
    </SafeAreaView>
  );
};

export default FeedScreen;
