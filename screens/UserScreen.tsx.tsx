import axios from "axios";
import { FlatList, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView } from "react-native";
import ScreenContainer from "../common/ScreenContainer";
import User from "../components/atom/User";

const UserScreen = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers([...users, ...res.data]);
    });
  };

  const refresh = () => {
    setRefreshing(true);

    setUsers([]);

    setTimeout(() => {
      getUsers();
      setRefreshing(false);
    }, 3000);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScreenContainer title={"Users"}>
      <SafeAreaView>
        <VStack
          height="100%"
          width="100%"
          alignItems={"center"}
          justifyContent={"center"}
          space={10}
        >
          <FlatList
            w={"full"}
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
              <Text textAlign={"center"}>
                The users are loading please wait.
              </Text>
            }
          />
        </VStack>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default UserScreen;
