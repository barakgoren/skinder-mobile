import React from "react";
import { StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = ({ text }: { text: string }) => {
  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={
        <Text style={styles.text}>{text}</Text> // The text serves as the mask
      }
    >
      <LinearGradient
        colors={["#4A90E2", "#FF5A5F"]} // Start and end gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskedView: {
    height: 50, // Adjust based on your text size
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  gradient: {
    flex: 1, // Ensures the gradient covers the text
  },
});

export default GradientText;
