import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { icons, images } from "../constants";
import colors from "../@core/utils/colors";

export type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (value: string) => void;
  otherStyles: string;
  keyboardType?: KeyboardTypeOptions;
};

const FormField = ({
  title,
  value,
  placeholder,
  otherStyles,
  handleChangeText,
  keyboardType,
}: FormFieldProps) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="items-center flex-row border-2 border-black-100 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-500">
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.text.muted}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password"}
          keyboardType={keyboardType || "default"}
          className="flex-1 text-white font-psemibold text-base"
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={icons.eye}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
