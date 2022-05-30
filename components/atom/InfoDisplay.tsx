import { Text, useColorModeValue, View } from "native-base";
import React from "react";

interface IProps {
  title: string;
  data: string;
}

const InfoDisplay = ({ title, data }: IProps) => {
  return (
    <View>
      <Text color={useColorModeValue("blue.900", "blue.100")} fontSize={20}>
        {title} :
      </Text>
      <Text fontSize={16}>{data}</Text>
    </View>
  );
};

export default InfoDisplay;
