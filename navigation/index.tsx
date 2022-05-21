import { createDrawerNavigator } from "@react-navigation/drawer";
import FeedScreen from "../screens/FeedScreen.tsx";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={"Main"}
      drawerContent={() => <ProfileScreen />}
      screenOptions={{
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          drawerLabel: "Feed",
        }}
      />
    </Drawer.Navigator>
  );
}
