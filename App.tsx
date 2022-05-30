import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import theme from "./theme/theme";

export default function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
