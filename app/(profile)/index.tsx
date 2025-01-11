import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "react-native-vector-icons/Feather";
import Fa5 from "react-native-vector-icons/FontAwesome5";
import Fa from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import CountryFlag from "react-native-country-flag";
import { FlatList } from "react-native";
import Review from "../../components/Review";
import { useNavigation, useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  return (
    <ScrollView className="h-full bg-primary">
      <View>
        <Image
          source={images.kapronCover}
          className="w-full h-52 bg-slate-500"
          resizeMode="cover"
        />
        <View className="px-5">
          <View>
            <View className="w-36 h-36 ms-auto bg-primary flex items-center justify-center -mt-[4.5rem] rounded-full relative">
              <Image
                source={images.profile}
                className="w-32 h-32 rounded-full"
                resizeMode="cover"
              />
            </View>
            <TouchableOpacity
              className="absolute py-3"
              onPress={() => {
                router.push("settings");
              }}
            >
              <Feather name="edit" color={"white"} size={20} />
            </TouchableOpacity>
          </View>
          <View className="flex-row-reverse items-center justify-between mt-4">
            <Text className="text-white text-2xl font-psemibold">
              <Fa5 name="snowboarding" size={16} color="#5edcd9" /> | ברק גורן
            </Text>
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
          <View className="flex-row-reverse items-center">
            <Icons name="map-pin" size={16} color="#a8e5e0" />
            <Text className="text-gray-400 font-pregular mr-2">
              וואל טורנס, צרפת 🇫🇷
            </Text>
          </View>
          <Text className="text-white text-right font-pregular mt-4">
            אני גולש סנובורד שאוהב לטייל ולחקור את העולם.
          </Text>
          <View className="flex-row-reverse gap-1 my-6">
            <CustomButton
              title="בדוק זמינות"
              containerStyles="flex-1 justify-center items-center bg-gray-700 min-h-10 rounded-md"
              textStyles="text-white font-pmedium"
              handlePress={() => {}}
            />
            <CustomButton
              title="ביקורות"
              containerStyles="flex-1 justify-center items-center bg-gray-700 min-h-10 rounded-md"
              textStyles="text-white font-pmedium"
              handlePress={() => {}}
            />
          </View>
          <Text className="text-white font-psemibold text-right">
            קצת על עצמי:
          </Text>
          <Text className="text-gray-400 text-right font-pregular mt-2">
            אני גולש סנובורד כבר מעל 10 שנים וביקרתי בכמה מהיעדים הטובים ביותר
            לסנובורד ברחבי העולם. המקומות האהובים עליי לגלוש הם האלפים הצרפתיים
            והרי הרוקי. כשאני לא על המדרונות, אני נהנה מטיולים רגליים, צילום
            וניסיונות במטבחים מקומיים.
          </Text>
          <View className="mt-4">
            <Text className="text-white text-right font-psemibold">
              ביקורות שנוספו לאחרונה:
            </Text>
            <View className="mt-2 gap-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <Review key={item} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
