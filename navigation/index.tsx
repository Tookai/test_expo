import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen.tsx";
import MainScreen from "../screens/MainScreen";
import ProfileDrawer from "../screens/ProfileDrawer";
import SettingsDrawer from "../screens/SettingsDrawer";
import UserModal from "../screens/UserModal";

const RightDrawer = createDrawerNavigator();
const LeftDrawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      drawerContent={() => <SettingsDrawer />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <RightDrawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </RightDrawer.Navigator>
  );
};

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      drawerContent={() => <ProfileDrawer />}
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <LeftDrawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </LeftDrawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Main"}
      screenOptions={{
        headerShown: false,
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
          component={FeedScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Comments"
          component={FeedScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Photos"
          component={FeedScreen}
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
          headerShown: true,
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
      </Stack.Group>

      {/*   ----- -------  -----   */}
      {/*   ----- -------  -----   */}

      {/*   ----- -------  -----   */}
      {/*   ----- DRAWERS  -----   */}
      {/*   ----- -------  -----   */}
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: "card",
        }}
      >
        <Stack.Screen
          name="Settings"
          component={SettingsDrawer}
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileDrawer}
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
