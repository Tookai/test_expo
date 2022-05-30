import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import { FlatList, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView } from "react-native";
import ScreenContainer from "../common/ScreenContainer";
import User from "../components/atom/User";
import { AppParams } from "../navigation";

const PhotoScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppParams>>();

  const [photos, setPhotos] = useState<any[]>([]);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getPhotos = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos([...photos, ...res.data]);
    });
  };

  const refresh = () => {
    setRefreshing(true);
    setPhotos([]);

    setTimeout(() => {
      getPhotos();
      setRefreshing(false);
    }, 3000);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <ScreenContainer title={"Photos"}>
      <SafeAreaView>
        <VStack alignItems={"center"} justifyContent={"center"} h={"100%"}>
          <FlatList
            data={photos}
            renderItem={({ item, index }) => <User key={index} user={item} />}
            keyExtractor={(item, index) => String(index)}
            initialNumToRender={10}
            onEndReached={() => getPhotos()}
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
