import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useTranslation from "../@core/hooks/useTranslation";
import LinearGradient from "react-native-linear-gradient";


type AppNameProps = {
  className?: string;
}
function AppName({className}: AppNameProps) {
  const { t } = useTranslation();
  return <Text className={`text-secondary-600 ${className}`}> {t("appName")}</Text>;
}

export default AppName;
