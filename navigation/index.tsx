import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AppNavigation, { AppParams } from "./appRoutes";
import AuthNavigation, { AuthParams } from "./authRoutes";

type RootParams = {
  App: AppParams;
  Auth: AuthParams;
};

const Stack = createNativeStackNavigator<RootParams>();

const Navigation = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen
          name="App"
          component={AppNavigation}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigation}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
