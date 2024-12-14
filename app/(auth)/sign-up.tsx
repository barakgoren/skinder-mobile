import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import useTranslation from "../../@core/hooks/useTranslation";
import AppName from "../../components/AppName";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "../../@core/schemas/sign-up.schema";
import AuthService from "../../@core/services/auth.service";

const SignUp = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (data: any) => {
    const newUser = await AuthService.createUser(data);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[75vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            {t("sign-up.header")}
            <AppName />
          </Text>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <FormField
                  title={t("sign-up.username")}
                  value={value}
                  placeholder={t("sign-up.username-placeholder")}
                  handleChangeText={onChange}
                  otherStyles="mt-7"
                />
                {errors.username && (
                  <Text className="text-red-500 font-pmedium">
                    {errors.username.message}
                  </Text>
                )}
              </>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <FormField
                  title={t("sign-up.email")}
                  value={value}
                  placeholder={t("sign-up.email-placeholder")}
                  handleChangeText={onChange}
                  otherStyles="mt-7"
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text className="text-red-500 font-pmedium">
                    {errors.email.message}
                  </Text>
                )}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <FormField
                  title={t("sign-up.password")}
                  value={value}
                  placeholder={t("sign-up.password-placeholder")}
                  handleChangeText={onChange}
                  otherStyles="mt-7"
                />
                {errors.password && (
                  <Text className="text-red-500 font-pmedium">
                    {errors.password.message}
                  </Text>
                )}
              </>
            )}
          />
          <CustomButton
            title={t("sign-up.submit")}
            containerStyles="mt-7"
            handlePress={handleSubmit(onSubmit)}
          />
          <View className="mt-4 flex-row justify-center gap-2">
            <Text className="text-base text-white font-pmedium">
              {t("sign-up.already-have-account")}
            </Text>
            <Link
              href={"/sign-in"}
              className="text-base text-secondary font-pmedium"
            >
              {t("sign-up.sign-in-button")}
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
