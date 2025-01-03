import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

export default function ScreenTwo() {
  return (
    <View className="">
      <Text>ScreenTwo</Text>
      <CustomButton
        handlePress={() => console.log("Go to Screen One")}
        title="Go to Screen One"
        containerStyles="bg-blue-500 rounded-lg p-2"
      />
    </View>
  );
}
