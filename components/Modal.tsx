import React, { useEffect } from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";

enableScreens();
const Stack = createNativeStackNavigator();

export default function ModalContainer() {
  useEffect(() => {}, []);
  return (
    <Modal
      transparent={false}
      visible={true}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View className=" flex items-center justify-center">
        <View className="w-full h-full">
          {/* <ScreenOne /> */}
          <NavigationIndependentTree>
            <NavigationContainer initialState={{ index: 0, routes: [] }}>
              <Stack.Navigator initialRouteName="ScreenOne">
                <Stack.Screen
                  name="ScreenOne"
                  component={ScreenOne}
                  options={{ title: "Screen One", headerShown: false }}
                />
                <Stack.Screen
                  name="ScreenTwo"
                  component={ScreenTwo}
                  options={{ title: "Screen Two" }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </NavigationIndependentTree>
        </View>
      </View>
    </Modal>
  );
}
