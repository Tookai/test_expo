import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentScreen from "../screens/CommentScreen";
import MainScreen from "../screens/MainScreen";
import CommentModal from "../screens/modals/CommentModal";
import PhotoModal from "../screens/modals/PhotoModal";
import UserModal from "../screens/modals/UserModal";
import PhotoScreen from "../screens/PhotoScreen";
import UserScreen from "../screens/UserScreen.tsx";

export type AppParams = {
  // Screens
  Main: undefined;
  Users: undefined;
  Comments: undefined;
  Photos: undefined;
  // Modals
  UserModal: undefined;
  CommentModal: undefined;
  PhotoModal: undefined;
};

const Stack = createNativeStackNavigator<AppParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Main"}
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
      }}
    >
      {/*   ----- -------  -----   */}
      {/*   ----- SCREENS  -----   */}
      {/*   ----- -------  -----   */}
      <Stack.Group
        screenOptions={{
          presentation: "card",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Users"
          component={UserScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Comments"
          component={CommentScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Photos"
          component={PhotoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      {/*   ----- -------  -----   */}
      {/*   ----- -------  -----   */}

      {/*   ----- -------  -----   */}
      {/*   ----- MODALS   -----   */}
      {/*   ----- -------  -----   */}

      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen
          name="UserModal"
          component={UserModal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CommentModal"
          component={CommentModal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PhotoModal"
          component={PhotoModal}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
      {/*   ----- -------  -----   */}
      {/*   ----- -------  -----   */}
    </Stack.Navigator>
  );
};

export default Navigation;
