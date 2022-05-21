import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "./screens/MainScreen";
import theme from "./theme/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar />
        <MainScreen />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
