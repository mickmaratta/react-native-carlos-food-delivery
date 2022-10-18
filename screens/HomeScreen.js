import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline"
import Categories from "../components/Categories";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">

        {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://www.clipartmax.com/png/small/72-722180_these-are-some-cats-avatar-i-drew-during-my-free-time-black.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
           </Text>
           
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

       {/* SEARCH */}
       <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100,}}>
        <Categories />

        {/*FEATURED ROWS */}
       </ScrollView>
    </SafeAreaView>
  );
}