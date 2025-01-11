import React, { useEffect, useState } from "react";
import {
  View,
  Pressable,
  Dimensions,
  Text,
  ScrollView,
  Image,
} from "react-native";
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
import { data, schools, countries } from "../../data";
import { FlatList } from "react-native";
import { images } from "../../constants";
import Flag from "../../components/Flag";
import HomeFlag from "../../components/Flag";

const PAGE_WIDTH = Dimensions.get("window").width - 280;
const PAGE_HEIGHT = 150;

function Home() {
  const r = React.useRef<ICarouselInstance>(null);
  const [loop, setLoop] = React.useState(false);
  const [countriesBySegment, setCountriesBySegment] = useState<
    { isoCode: string; name: string }[][]
  >([]);

  useEffect(() => {
    const countriesBySegment = [];
    const runner = countries.length / 6;
    for (let i = 0; i < runner; i++) {
      countriesBySegment.push(countries.slice(i * 6, (i + 1) * 6));
    }
    setCountriesBySegment(countriesBySegment);
  }, []);
  return (
    <ScrollView className="bg-primary h-full px-4">
      <Text className="text-white text-right text-2xl font-psemibold mt-4 pb-1">
        אתרי סקי מובילים בעולם
      </Text>
      <View className="h-[18.5rem] w-full overflow-hidden">
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
      <Text className="text-white text-right text-2xl mt-2 font-psemibold pb-2">
        חפש לפי מדינה
      </Text>
      <View className="h-[14.5rem] w-full">
        <Carousel
          data={countriesBySegment.reverse()}
          loop={false}
          defaultIndex={countriesBySegment.length - 1}
          renderItem={({ item }) => (
            <View className="h-full gap-2">
              <View className="flex-row-reverse gap-10">
                {item.slice(0, 3).map((country) => (
                  <HomeFlag key={country.isoCode} {...country} />
                ))}
              </View>
              <View className="flex-row-reverse gap-10">
                {item.slice(3, item.length).map((country) => (
                  <HomeFlag key={country.isoCode} {...country} />
                ))}
              </View>
            </View>
          )}
          width={Dimensions.get("window").width - 28}
          style={{ height: "100%" }}
        />
      </View>
      <Text className="text-white text-right text-2xl font-psemibold mt-4 pb-2">
        בתי ספר לסקי
      </Text>
      <FlatList
        data={schools}
        renderItem={({ item }) => (
          <View className="w-40 h-44 ms-2 mb-10">
            <Image
              source={item.coverImage}
              className="w-full rounded-xl h-24"
            />
            <Text className="text-white text-right pt-1 font-pmedium">
              {item.name}
            </Text>
            <Text
              numberOfLines={3}
              className="text-primary-400 text-right font-plight text-xs"
            >
              {item.description}
            </Text>
          </View>
        )}
        horizontal
        bounces={false}
        inverted
        className="flex-grow-0"
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
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
          <Animated.Text
            className="text-white text-right font-pmedium"
            style={{ paddingTop: item.id === 1 ? 0 : 5 }}
          >
            {item.resortName}
          </Animated.Text>
          <Animated.Text
            className="text-primary-400 text-right font-plight text-xs"
            numberOfLines={3}
          >
            {item.description}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
