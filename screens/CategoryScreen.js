import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import RestaurantCard from "../components/RestaurantCard";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const CategoryScreen = () => {
  const navigation = useNavigation();
  const {
    params: { restaurants, title },
  } = useRoute();

  return (
    <SafeAreaView className="items-center bg-gray-100">
      <View className="bg-white p-4 w-full relative items-center justify-center">
        <Text className="text-center text-3xl font-bold">
          {title}
        </Text>
        <TouchableOpacity
          className="absolute top-6 left-5 p-2 bg-gray-100 rounded-full"
          onPress={navigation.goBack}
          r
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          {/*RESTAURANT CARD */}
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image.asset._ref}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
