import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test"/>
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <CategoryCard imgUrl='https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg' title="test" />
      <Text></Text>
    </ScrollView>
  );
};

export default Categories
