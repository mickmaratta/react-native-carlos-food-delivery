import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "category"] {
          name,
          short_description,
          _id,
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          },
        }`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);


  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image.asset._ref}
          title={category.name}
          restaurants={category.restaurants}
        />
      ))}
      <Text></Text>
    </ScrollView>
  );
};

export default Categories;
