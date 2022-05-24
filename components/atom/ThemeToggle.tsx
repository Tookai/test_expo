import { HStack, Switch, useColorMode } from "native-base";
import React from "react";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        offTrackColor={"bgLight"}
        onTrackColor={"bgDark"}
        offThumbColor={"bgDark"}
        onThumbColor={"bgLight"}
        size={"sm"}
      ></Switch>
    </HStack>
  );
}
