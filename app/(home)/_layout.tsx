import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Home from ".";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
