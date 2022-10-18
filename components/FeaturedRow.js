import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description, restaurants}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg" >{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/*RESTAURANT CARD */}
        {restaurants?.map(restaurant => (
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
  )
}

export default FeaturedRow