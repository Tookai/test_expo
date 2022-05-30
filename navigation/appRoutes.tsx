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
  UserModal: { userId: number };
  CommentModal: { commentId: number };
  PhotoModal: { photoId: number };
};

const AppRoutes = createNativeStackNavigator<AppParams>();

const AppNavigation = () => {
  return (
    <AppRoutes.Navigator
      initialRouteName={"Main"}
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
      }}
    >
      {/*   ----- -------  -----   */}
      {/*   ----- SCREENS  -----   */}
      {/*   ----- -------  -----   */}
      <AppRoutes.Group
        screenOptions={{
          presentation: "card",
          headerShown: false,
        }}
      >
        <AppRoutes.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />

        <AppRoutes.Screen
          name="Users"
          component={UserScreen}
          options={{
            headerShown: false,
          }}
        />

        <AppRoutes.Screen
          name="Comments"
          component={CommentScreen}
          options={{
            headerShown: false,
          }}
        />

        <AppRoutes.Screen
          name="Photos"
          component={PhotoScreen}
          options={{
            headerShown: false,
          }}
        />
      </AppRoutes.Group>
      {/*   ----- -------  -----   */}
      {/*   ----- -------  -----   */}

      {/*   ----- -------  -----   */}
      {/*   ----- MODALS   -----   */}
      {/*   ----- -------  -----   */}

      <AppRoutes.Group
        screenOptions={{
          presentation: "modal",
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      >
        <AppRoutes.Screen
          name="UserModal"
          component={UserModal}
          options={{
            headerShown: false,
          }}
        />
        <AppRoutes.Screen
          name="CommentModal"
          component={CommentModal}
          options={{
            headerShown: false,
          }}
        />
        <AppRoutes.Screen
          name="PhotoModal"
          component={PhotoModal}
          options={{
            headerShown: false,
          }}
        />
      </AppRoutes.Group>
      {/*   ----- -------  -----   */}
      {/*   ----- -------  -----   */}
    </AppRoutes.Navigator>
  );
};

export default AppNavigation;
