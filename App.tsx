import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BotTabNav from "./components/molecule/BotTabNav";
import Navigator from "./navigation";
import theme from "./theme/theme";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar />
          <Navigator />
          <BotTabNav />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
