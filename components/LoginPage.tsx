import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppName from "./AppName";
import FormField from "./FormField";
import CustomButton from "./CustomButton";
import { Link } from "expo-router";
import useTranslation from "../@core/hooks/useTranslation";
import { images } from "../constants";

export default function LoginPage() {
  const { t } = useTranslation();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            {t("sign-in.header")}
            <AppName />
          </Text>
          <FormField
            title={t("sign-in.email")}
            value={form.email}
            placeholder={t("sign-in.email-placeholder")}
            handleChangeText={(e: string) => {
              setForm({
                ...form,
                email: e,
              });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title={t("sign-in.password")}
            value={form.password}
            placeholder={t("sign-in.password-placeholder")}
            handleChangeText={(e: string) => {
              setForm({
                ...form,
                password: e,
              });
            }}
            otherStyles="mt-7"
          />
          <CustomButton
            title={t("sign-in.sign-in-button")}
            containerStyles="mt-7 bg-secondary-600 rounded-xl min-h-[62px] justify-center items-center"
            handlePress={onSubmit}
          />
          <View className="mt-4 flex-row justify-center gap-2">
            <Text className="text-base text-white font-pmedium">
              {t("sign-in.no-account")}
            </Text>
            <TouchableOpacity>
              <Text className="text-base text-secondary-600 font-pmedium">
                {t("sign-in.sign-up-button")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
