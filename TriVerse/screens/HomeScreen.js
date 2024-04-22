import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Inicio</Text>
      </View>
      {/* Contenido de la página */}
      <View className='flex-1 justify-center items-center'>
        <Text>Contenido de la página</Text>
      </View>
      {/* Pie de página */}
      <View className='bg-[#007EA7] h-20 flex-row justify-around items-center'>
        <TouchableOpacity>
          <Icon name='home' size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Activity")}>
          <Icon name='plus' size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='user' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
