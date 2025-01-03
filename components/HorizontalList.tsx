import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

interface Card {
  id: string;
  title: string;
  description: string;
}

const data: Card[] = [
  { id: "1", title: "Card 1", description: "This is the first card" },
  { id: "2", title: "Card 2", description: "This is the second card" },
  { id: "3", title: "Card 3", description: "This is the third card" },
];

const HorizontalList: React.FC = () => {
  const renderItem = ({ item }: { item: Card }) => (
    <View className="bg-primary-200 mx-2 p-4 rounded-lg">
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View className="h-52">
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalList;
