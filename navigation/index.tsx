import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";
import { LS_REFRESH_TOKEN } from "../utils/const";
import AppNavigation, { AppParams } from "./appRoutes";
import AuthNavigation, { AuthParams } from "./authRoutes";

type RootParams = {
  App: AppParams;
  Auth: AuthParams;
};

const Stack = createNativeStackNavigator<RootParams>();

const Navigation = () => {
  const { isAuthenticated } = useAuth();

  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    SecureStore.getItemAsync(LS_REFRESH_TOKEN)
      .then((token) => {
        if (token) setHasToken(true);
        else setHasToken(false);
      })
      .catch(() => {
        setHasToken(false);
      });
  }, [isAuthenticated]);

  return (
    <Stack.Navigator>
      {hasToken ? (
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
