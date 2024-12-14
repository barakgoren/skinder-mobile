import { View, Text } from "react-native";
import React from "react";
import { useAuthStore } from "../../@core/store/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  console.log({ user });

  return (
    <View className="bg-primary h-full">
      <Text className="text-white">
        Hello
        {user?.firstName ? `, ${user.firstName}` : `, ${user?.username}`}
      </Text>
    </View>
  );
};

export default Home;
