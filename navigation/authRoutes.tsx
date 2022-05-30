import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

export type AuthParams = {
  // Screens
  Login: undefined;
  Register: undefined;
};

const AuthRoutes = createNativeStackNavigator<AuthParams>();

const AuthNavigation = () => {
  return (
    <AuthRoutes.Navigator
      initialRouteName={"Login"}
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
        gestureEnabled: false,
      }}
    >
      {/*   ----- -------  -----   */}
      {/*   ----- SCREENS  -----   */}
      {/*   ----- -------  -----   */}

      <AuthRoutes.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthRoutes.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />

      {/*   ----- -------  -----   */}
      {/*   ----- -------  -----   */}
    </AuthRoutes.Navigator>
  );
};

export default AuthNavigation;
