import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import MapView, { Polyline } from "react-native-maps";

export default function HomeScreen() {
  const navigation = useNavigation();
  const coordinates = [
    { latitude: 28.958406, longitude: -13.758424 },
    { latitude: 28.985438, longitude: -13.742631 },
    { latitude: 28.995648, longitude: -13.742288 },
    { latitude: 29.004178, longitude: -13.738951 },
    { latitude: 29.005379, longitude: -13.735518 },
    { latitude: 29.013786, longitude: -13.731055 },
    { latitude: 29.014987, longitude: -13.725046 },
    { latitude: 29.043205, longitude: -13.694491 },
    { latitude: 29.043505, longitude: -13.686938 },
    { latitude: 29.070965, longitude: -13.671831 },
    { latitude: 29.108486, longitude: -13.665544 },
    { latitude: 29.116285, longitude: -13.643486 },
    { latitude: 29.097762, longitude: -13.620054 },
    { latitude: 29.11411, longitude: -13.568384 },
  ];

  const coordinatesSwim = [
    { latitude: 28.958396, longitude: -13.55875 },
    { latitude: 28.9565, longitude: -13.555424 },
    { latitude: 28.954967, longitude: -13.551132 },
    { latitude: 28.953252, longitude: -13.554561 },
    { latitude: 28.955524, longitude: -13.559458 },
    { latitude: 28.958396, longitude: -13.55875 },
  ];
  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Inicio</Text>
      </View>
      {/* Contenido de la página */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className='bg-gray-200'
      >
        <View className='bg-white mt-1 mb-1'>
          <Image
            source={require("../assets/profilePic.png")}
            className='w-12 h-12 absolute rounded-3xl'
          />
          <View className='p-2 ml-12'>
            <View className='mb-2'>
              <Text className='font-bold text-xl'>Ciclismo en Lanzarote</Text>
              <Text>Alejandro de León Fernández</Text>
            </View>
            <View className='flex-row items-center'>
              <View className='flex-1'>
                <Text>Distancia</Text>
                <Text className='font-bold'>180,54 km</Text>
              </View>
              <View className='flex-1'>
                <Text>Tiempo</Text>
                <Text className='font-bold'>4h 34min</Text>
              </View>
            </View>
          </View>
          <MapView
            className='w-full h-80 mb-3'
            initialRegion={{
              latitude: 29.0469,
              longitude: -13.5899,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            scrollEnabled={true}
            zoomEnabled={true}
          >
            <Polyline
              coordinates={coordinates}
              strokeColor='#007EA7' // Color de la línea
              strokeWidth={4} // Ancho de la línea
            />
          </MapView>
        </View>
        <View className='bg-white mt-1 mb-1'>
          <Image
            source={require("../assets/profilePic.png")}
            className='w-12 h-12 absolute rounded-3xl'
          />
          <View className='p-2 ml-12'>
            <View className='mb-2'>
              <Text className='font-bold text-xl'>Natación en Arrecife</Text>
              <Text>Alejandro de León Fernández</Text>
            </View>
            <View className='flex-row items-center'>
              <View className='flex-1'>
                <Text>Distancia</Text>
                <Text className='font-bold'>2300m</Text>
              </View>
              <View className='flex-1'>
                <Text>Tiempo</Text>
                <Text className='font-bold'>1h 23min</Text>
              </View>
            </View>
          </View>
          <MapView
            className='w-full h-80 mb-3'
            initialRegion={{
              latitude: 29.0469,
              longitude: -13.5899,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            scrollEnabled={true}
            zoomEnabled={true}
          >
            <Polyline
              coordinates={coordinatesSwim}
              strokeColor='#007EA7' // Color de la línea
              strokeWidth={4} // Ancho de la línea
            />
          </MapView>
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
        <TouchableOpacity onPress={() => navigation.push("User")}>
          <Icon name='user' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
