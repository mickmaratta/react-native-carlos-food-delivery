import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({imgUrl, title, restaurants}) => {
const navigation = useNavigation();

  return (
    <TouchableOpacity className="relative mr-2" onPress={()=> {navigation.navigate("Category", {restaurants, title})}}>
        <Image source={{
            uri: urlFor(imgUrl).url(),
        }}
        className="h-20 w-20 rounded" />
      <Text className= "text-xs absolute bottom-1 left-0.5 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard