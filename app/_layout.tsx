import { StatusBar } from "expo-status-bar";
import {
  I18nManager,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";
import { useEffect } from "react";
import AppName from "../components/AppName";
import { Redirect, Tabs } from "expo-router";
import { icons } from "../constants";
import Icons from "react-native-vector-icons/Ionicons";
import ModalContainer from "../components/Modal";
import { usePopupStore } from "../@core/store/popup.store";
import Entypo from "react-native-vector-icons/Entypo";
import Fa from "react-native-vector-icons/FontAwesome";
import Ion from "react-native-vector-icons/Ionicons";

SplashScreen.preventAutoHideAsync();

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="flex items-center justify-center gap-2 w-20">
      {icon}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  const toggle = usePopupStore((state) => state.toggle);

  useEffect(() => {
    if (error) console.error(error);
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#5edcd9",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#141f2a",
            borderTopWidth: 15,
            borderTopColor: "#141f2a",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#141f2a", // Customize the background color
            },
            headerTintColor: "#fff", // Customize the text color
            headerTitle: () => {
              return <AppName className="font-pbold text-2xl" />;
            },
            headerRight: () => {
              return (
                <View className="w-10 mb-3">
                  <Link href="profile/index">
                    <TouchableOpacity onPress={toggle} activeOpacity={0.7}>
                      <Icons name="person" size={24} color="#6ae4e1" />
                    </TouchableOpacity>
                  </Link>
                </View>
              );
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={
                  focused ? (
                    <Ion name="home" size={24} color={color} />
                  ) : (
                    <Ion name="home-outline" size={24} color={color} />
                  )
                }
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(search)"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={ focused ? <Ion name="search" size={26} color={color} /> : <Ion name="search-outline" size={26} color={color} />}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(map)"
          options={{
            title: "Map",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#141f2a", // Customize the background color
            },
            headerTintColor: "#fff", // Customize the text color
            headerTitle: () => {
              return <AppName className="font-pbold text-2xl" />;
            },
            headerRight: () => {
              return (
                <View className="w-10 mb-3">
                  <Icons name="edit" size={24} color="#fff" />
                </View>
              );
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={
                  focused ? (
                    <Fa name="map" size={24} color={color} />
                  ) : (
                    <Fa name="map-o" size={24} color={color} />
                  )
                }
                color={color}
                name="Map"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? <Icons name="person" size={24} color={color} /> : <Icons name="person-outline" size={24} color={color} />}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
      <ModalContainer />
    </>
  );
}
