import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";

export default function Bike() {
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Ciclismo</Text>
      </View>
      {/* Contenido de la página */}
      <View className='flex-1'>
        <MapView
          className='w-full h-80 mb-3'
          region={{
            latitude: 29.0469,
            longitude: -13.5899,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
          }}
        />
        <View>
          <Text className='text-black font-bold tracking-wider text-xl mb-3 text-center'>
            Tiempo
          </Text>
          <Text className='text-black font-bold tracking-wider text-4xl mb-5 text-center'>
            0h 24min 19s
          </Text>
          <Text className='text-black font-bold tracking-wider text-xl mb-3 text-center'>
            Velocidad
          </Text>
          <Text className='text-black font-bold tracking-wider text-4xl mb-5 text-center'>
            34,00 km/h
          </Text>
          <Text className='text-black font-bold tracking-wider text-xl mb-3 text-center'>
            Distancia
          </Text>
          <Text className='text-black font-bold tracking-wider text-4xl mb-5 text-center'>
            17,00 km
          </Text>
        </View>
        <View className='w-full items-center'>
          <TouchableOpacity
            className='w-5/6 bg-[#003249] p-3 rounded-2xl mb-3 flex-row items-center justify-center'
            onPress={() => navigation.push("Run")}
          >
            <Icon
              name='home'
              size={28}
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
