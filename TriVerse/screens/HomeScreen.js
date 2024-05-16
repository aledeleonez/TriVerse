import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Inicio</Text>
      </View>
      {/* Contenido de la página */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='bg-white'>
          <Image
            source={require("../assets/profilePic.jpeg")}
            className='w-12 h-12 absolute rounded-3xl'
          />
          <View className='p-2 ml-12 flex-row'>
            <View className='flex-1'>
              <Text>Alejandro</Text>
              <Text>Ciclismo en Lanzarote</Text>
            </View>
            <View className='flex-1'>
              <Text>4h 34min</Text>
              <Text>180,54 km</Text>
            </View>
          </View>
          <MapView
            className='w-full h-80 mb-3'
            region={{
              latitude: 29.0469,
              longitude: -13.5899,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          />
        </View>
        <View className='bg-white'>
          <Image
            source={require("../assets/profilePic.jpeg")}
            className='w-12 h-12 absolute rounded-3xl'
          />
          <View className='p-2 ml-12 flex-row'>
            <View className='flex-1'>
              <Text>Alejandro</Text>
              <Text>Ciclismo en Lanzarote</Text>
            </View>
            <View className='flex-1'>
              <Text>4h 34min</Text>
              <Text>180,54 km</Text>
            </View>
          </View>
          <MapView
            className='w-full h-80 mb-3'
            region={{
              latitude: 29.0469,
              longitude: -13.5899,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          />
        </View>
      </ScrollView>
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
