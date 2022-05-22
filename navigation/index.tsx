import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen.tsx";
import MainScreen from "../screens/MainScreen";
import ProfileDrawer from "../screens/ProfileDrawer";
import SettingsDrawer from "../screens/SettingsDrawer";
import UserModal from "../screens/UserModal";

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
const Stack = createNativeStackNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={"Drawer"}
      drawerContent={() => <ProfileDrawer />}
      screenOptions={{
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <RightDrawer.Screen
        name="Drawer"
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
    </Drawer.Navigator>
  );
}
