import * as React from "react";
import { View, Pressable, Dimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { data } from "../../data";

const PAGE_WIDTH = Dimensions.get("window").width - 280;
const PAGE_HEIGHT = 150;

function Home() {
  const r = React.useRef<ICarouselInstance>(null);
  const [loop, setLoop] = React.useState(false);

  return (
    <View className="bg-primary h-full px-4">
      <View className="h-80 w-full overflow-hidden">
        <Carousel
          key={`${loop}`}
          ref={r}
          loop={true}
          style={{
            width: Dimensions.get("window").width,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          onSnapToItem={(index) => {
            console.log("onSnapToItem", index);
          }}
          data={data}
          renderItem={({ item, animationValue }) => {
            return (
              <Item
                animationValue={animationValue}
                item={item}
                onPress={() =>
                  r.current?.scrollTo({
                    count: animationValue.value,
                    animated: true,
                  })
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
}

export default Home;

interface Props {
  animationValue: SharedValue<number>;
  item: {
    id: number;
    resortName: string;
    country: string;
    description: string;
    coverImage: any;
    logo: any;
  };
  onPress?: () => void;
}

const Item: React.FC<Props> = (props) => {
  const { animationValue, item, onPress } = props;

  const pressScale = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1, 1],
      Extrapolation.CLAMP
    );
    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale =
      interpolate(
        animationValue.value,
        [-1, 0, 1],
        [1, 1.2, 1],
        Extrapolation.CLAMP
      ) + pressScale.value;

    return {
      transform: [{ scale }],
    };
  }, [animationValue, pressScale]);

  const onPressIn = React.useCallback(() => {
    pressScale.value = withTiming(0.07, { duration: 250 });
  }, [pressScale]);

  const onPressOut = React.useCallback(() => {
    pressScale.value = withTiming(0, { duration: 250 });
  }, [pressScale]);

  console.log({ item });

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[
          {
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Animated.View
          style={[
            {
              width: 130,
              height: 210,
              overflow: "hidden",
            },
            labelStyle,
          ]}
        >
          <View style={{ width: "100%", height: "70%" }} className="relative">
            <Animated.Image
              source={item.coverImage}
              style={{
                borderRadius: 5,
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            />
            <View className="absolute top-1 left-0 right-0 px-2 flex-row justify-between items-center">
              <Animated.Text className="text-primary-100 font-pmedium text-xs">
                {item.country}
              </Animated.Text>
              <Animated.Image
                source={item.logo}
                className="rounded-full"
                style={{ width: 30, height: 30, objectFit: "contain" }}
              />
            </View>
          </View>
          <Animated.Text className="text-white font-pmedium">
            {item.resortName}
          </Animated.Text>
          <Animated.Text
            className="text-primary-400 font-plight text-xs"
            numberOfLines={3}
          >
            {item.description}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
