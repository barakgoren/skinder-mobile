import { View, Text, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, useRouter } from "expo-router";
import useTranslation from "../../@core/hooks/useTranslation";
import AppName from "../../components/AppName";
import AuthService from "../../@core/services/auth.service";
import { useAuthStore } from "../../@core/store/auth.store";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    login(form);
    router.replace("/home");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
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
            <Link
              href={"/sign-up"}
              className="text-base text-secondary-600 font-pmedium"
            >
              {t("sign-in.sign-up-button")}
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
