import { useNavigation } from "@react-navigation/native";
import { Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ScreenContainer from "../common/ScreenContainer";

const MainScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenContainer title={"Main"}>
      <SafeAreaView>
        <VStack
          height="100%"
          alignItems={"center"}
          justifyContent={"center"}
          space={10}
        >
          <Text>
            This is the main screen. You can navigate to the other screens by
            clicking the buttons below. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum eum soluta, minima facere similique
            deserunt? Repellendus soluta minima, est officiis nostrum labore
            blanditiis necessitatibus iusto. Doloremque nobis minima distinctio
            ex! Cupiditate commodi vitae quibusdam, quis numquam dolorem
            voluptatum officia iste perspiciatis voluptatem delectus magnam
            aspernatur! Blanditiis provident, ea vero quis maxime eligendi eaque
            animi repudiandae, maiores itaque tenetur ex fugit! Totam
            perspiciatis maiores esse ea dolores, corrupti, quaerat iste
            recusandae consequatur laudantium numquam veritatis maxime
            repudiandae at placeat unde. In, fuga inventore quas et pariatur ab
            doloribus sint facilis doloremque. Repellat porro sit illo suscipit
            ipsam necessitatibus fugiat obcaecati possimus dolorum, et magni
            voluptates atque explicabo voluptatem! Voluptatem similique odio
            consectetur laboriosam, et possimus aspernatur itaque, pariatur
            voluptatibus, iusto delectus?
          </Text>
        </VStack>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default MainScreen;
