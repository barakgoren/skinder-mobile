import React, { useEffect } from "react";
import { View, Modal } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";
import LoginPage from "./LoginPage";
import { usePopupStore } from "../@core/store/popup.store";

export default function ModalContainer() {
  const isOpen = usePopupStore((state) => state.isOpen);
  const close = usePopupStore((state) => state.close);
  return (
    <>
      <Modal
        transparent={false}
        visible={isOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={close}
        
      >
        <View className="bg-primary-100 h-full p-4">
          <View className="header">
            <Icons name="close" size={24} onPress={close} />
          </View>
          <LoginPage />
        </View>
      </Modal>
    </>
  );
}
