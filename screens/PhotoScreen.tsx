import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FlatList, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView } from "react-native";
import ScreenContainer from "../common/ScreenContainer";
import User from "../components/atom/User";

const PhotoScreen = () => {
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
    <ScreenContainer title={"Photos"}>
      <SafeAreaView>
        <VStack alignItems={"center"} justifyContent={"center"} h={"100%"}>
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
            ListEmptyComponent={
              <Text>The photos are loading please wait.</Text>
            }
          />
        </VStack>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default PhotoScreen;
