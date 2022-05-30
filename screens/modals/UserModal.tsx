import { RouteProp, useRoute } from "@react-navigation/native";
import axios from "axios";
import { Heading, VStack } from "native-base";
import React, { useEffect } from "react";
import ModalContainer from "../../common/ModalContainer";
import InfoDisplay from "../../components/atom/InfoDisplay";
import { AppParams } from "../../navigation";

interface User {
  name: string;
  email: string;
  username: string;
  id: number;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
}

const UserModal = () => {
  // get user id from route params
  const router = useRoute<RouteProp<AppParams, "UserModal">>();

  const [user, setUser] = React.useState<User>();

  const getUser = (userId: number) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      });
  };

  console.log(user);

  useEffect(() => {
    if (router && router.params && router.params.userId) {
      getUser(router.params.userId);
    }
  }, [router.params.userId]);

  return (
    <ModalContainer>
      <Heading textAlign={"center"} pb={2}>
        User
      </Heading>

      {user && (
        <VStack space={2}>
          <InfoDisplay title={"Name"} data={user.name} />
          <InfoDisplay title={"Email"} data={user.email} />
          <InfoDisplay title={"Username"} data={user.username} />
          <InfoDisplay title={"Phone"} data={user.phone} />
          <InfoDisplay title={"Website"} data={user.website} />
          <InfoDisplay title={"Address"} data={user.address.street} />
          <InfoDisplay title={"City"} data={user.address.city} />
          <InfoDisplay title={"Zipcode"} data={user.address.zipcode} />
        </VStack>
      )}
    </ModalContainer>
  );
};

export default UserModal;
