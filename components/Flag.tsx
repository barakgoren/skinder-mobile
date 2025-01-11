import { View, Text, Pressable } from "react-native";
import React from "react";
import Flag from "react-native-country-flag";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type HomeFlagProps = {
  isoCode: string;
  name: string;
};

export default function HomeFlag({ isoCode, name }: HomeFlagProps) {
  const pressScale = useSharedValue(0);

  const pressableStyle = useAnimatedStyle(() => {
    const scale =
      interpolate(0.5, [-1, 0, 1], [1, 1.1, 1], Extrapolation.CLAMP) +
      pressScale.value;

    return {
      transform: [{ scale }],
    };
  }, [pressScale]);

  const onPressIn = React.useCallback(() => {
    pressScale.value = withTiming(0.04, { duration: 100 });
  }, [pressScale]);

  const onPressOut = React.useCallback(() => {
    pressScale.value = withTiming(0, { duration: 100 });
  }, [pressScale]);
  return (
    <Pressable
      className="h-28 w-32 justify-center"
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={pressableStyle}
    >
      <Animated.View
        style={pressableStyle}
        className="justify-center items-center"
      >
        <View className="rounded-lg overflow-hidden">
          <Flag isoCode={isoCode} size={52} />
        </View>
        <Text className="text-white">{name}</Text>
      </Animated.View>
    </Pressable>
  );
}
