import React from "react";
import { Image, Text, View } from "react-native";
import { images } from "../constants";
import Fa from "react-native-vector-icons/FontAwesome";

const Review = () => {
  return (
    <View className="w-full p-4">
      <Image
        source={images.profile}
        className="w-10 h-10 absolute z-10 right-0 rounded-full"
        resizeMode="cover"
      />
      <View className="bg-primary-100 py-1 relative rounded-xl w-full">
        <View className="ps-4 pe-8">
          <View className="flex-row-reverse items-center justify-between">
            <Text className="text-white font-pmedium">ברק גורן, 25</Text>
            <View className="flex-row gap-1 items-center">
              <Text style={{ transform: [{ scaleX: -1 }] }}>
                <Fa name="star-half-o" size={16} color="#5edcd9" />
              </Text>
              <Fa name="star" size={16} color="#5edcd9" />
              <Fa name="star" size={16} color="#5edcd9" />
              <Fa name="star" size={16} color="#5edcd9" />
              <Text className="text-white font-psemibold ml-1">4.5</Text>
            </View>
          </View>
          <Text className="text-white font-extralight ms-auto">
            יום רביעי, 12 במאי 2021
          </Text>
        </View>
        <Text className="text-white mt-2 text-right font-pregular px-3">
          ג'ון הוא מדריך יוצא מן הכלל! שיטות ההוראה שלו ברורות ותמציתיות, מה שהופך נושאים מורכבים לקלים להבנה. ממליץ בחום על השיעורים שלו לכל מי שמחפש לשפר את כישוריו.
        </Text>
      </View>
    </View>
  );
};

export default Review;
