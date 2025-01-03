import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "./CustomButton";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";

export default function ScreenOne() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("ScreenTwo");
  }, []);

  return (
    <View className="bg-gray-600 w-full h-full flex items-center justify-center z-50">
      <Text>ScreenOne</Text>
      <CustomButton
        handlePress={() => {
          console.log("Go to Screen Two");
          //   navigation.navigate("ScreenTwo");
        }}
        title="Go to Screen Two"
        containerStyles="bg-blue-500 rounded-lg p-2"
      />
      {/* <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate("ScreenTwo")}
      /> */}
    </View>
  );
}
