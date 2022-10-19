import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
const items = useSelector(selectBasketItems);
const basketTotal = useSelector(selectBasketTotal).toFixed(2);
const navigation = useNavigation();

if (items.length ===0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 p-4 rounded-lg flex-row items-center space-x-1 bg-[#00CCBB]">
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-white font-extrabold">$ {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon