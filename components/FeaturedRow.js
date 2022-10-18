import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
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
        <RestaurantCard 
         id="123"
         imgUrl="https://i.pinimg.com/736x/36/04/c5/3604c501a5a9a91a267dd4f2f5b88404.jpg"
         title="Pizza House"
         rating={4.5}
         genre="Italian"
         address="123 Main St"
         short_description="This is a pizza place"
         dishes={[]}
         long={20}
         lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow