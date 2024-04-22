import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Actividad</Text>
      </View>
      {/* Contenido de la página */}
      <View className='flex-1 justify-center items-center'>
        <Text className='text-black font-bold tracking-wider text-2xl mb-5 text-center'>
          Introduce la distancia que vas a nadar
        </Text>
        <View className='bg-[#D9D9D9] p-5 rounded-2xl w-5/6 mb-2'>
          <TextInput
            placeholder='Distancia'
            placeholderTextColor={"gray"}
            className='ml-5'
          />
        </View>
        <View className='w-full items-center'>
          <TouchableOpacity className='w-5/6 bg-[#003249] p-3 rounded-2xl mb-3 flex-row items-center justify-center'>
            <Text className='text-xl font-bold text-white text-center mr-2'>
              Comenzar actividad
            </Text>
            <Icon
              name='arrow-right'
              size={24}
              color='white'
              className='left-3 top-4'
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Pie de página */}
      <View className='bg-[#007EA7] h-20 flex-row justify-around items-center'>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Icon name='home' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
