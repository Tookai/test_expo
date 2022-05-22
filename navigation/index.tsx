import { createDrawerNavigator } from "@react-navigation/drawer";
import FeedScreen from "../screens/FeedScreen.tsx";
import MainScreen from "../screens/MainScreen";
import ProfileDrawer from "../screens/ProfileDrawer";
import SettingsDrawer from "../screens/SettingsDrawer";

const RightDrawer = createDrawerNavigator();
function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      initialRouteName={"Main"}
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
}

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={"Main"}
      drawerContent={() => <ProfileDrawer />}
      screenOptions={{
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <RightDrawer.Screen
        name="SettingsDrawer"
        component={RightDrawerScreen}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Users"
        component={FeedScreen}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Comments"
        component={FeedScreen}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Photos"
        component={FeedScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
