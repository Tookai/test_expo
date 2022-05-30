import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Center, Flex, Image, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AppParams } from "../../navigation/appRoutes";


interface IProps {
  photo: {
    title: string;
    thumbnailUrl: string;
    url: string;
    id: number;
  };
}

const Photo = ({ photo }: IProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppParams>>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("PhotoModal", { photoId: photo.id })}
    >
      <Flex
        m={2}
        borderWidth={2}
        borderColor={"amber.100"}
        p={2}
        rounded={"lg"}
      >
        <Center p={2}>
          <Image
            source={{
              uri: photo.thumbnailUrl,
            }}
            style={{
              width: 100,
              height: 100,
            }}
            alt={photo.title}
          />
        </Center>

        <Text>{photo.title}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

export default Photo;
