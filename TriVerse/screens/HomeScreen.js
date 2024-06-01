import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import MapView, { Polyline } from "react-native-maps";

export default function HomeScreen() {
  const navigation = useNavigation();
  const coordinates = [
    { latitude: 28.958687, longitude: -13.558825 },
    { latitude: 28.957732, longitude: -13.554472 },
    { latitude: 28.9605848, longitude: -13.542799 },
    { latitude: 28.977875, longitude: -13.530504 },
    { latitude: 29.007042, longitude: -13.48467 },
    { latitude: 29.03196, longitude: -13.520891 },
    { latitude: 29.011752, longitude: -13.54561 },
    { latitude: 28.980297, longitude: -13.54458 },
    { latitude: 28.966781, longitude: -13.548013 },
    { latitude: 28.958687, longitude: -13.558825 },
  ];

  const coordinatesSwim = [
    { latitude: 28.958396, longitude: -13.55875 },
    { latitude: 28.9565, longitude: -13.555424 },
    { latitude: 28.954967, longitude: -13.551132 },
    { latitude: 28.953252, longitude: -13.554561 },
    { latitude: 28.955524, longitude: -13.559458 },
    { latitude: 28.958396, longitude: -13.55875 },
  ];

  const coordinatesRun = [
    { latitude: 28.958687, longitude: -13.558825 },
    { latitude: 28.957957, longitude: -13.560995 },
    { latitude: 28.956361, longitude: -13.559514 },
    { latitude: 28.955929, longitude: -13.563656 },
    { latitude: 28.954521, longitude: -13.565909 },
    { latitude: 28.955028, longitude: -13.574942 },
    { latitude: 28.948644, longitude: -13.59816 },
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
              <Text className='font-bold text-xl'>Triatlón en Arrecife</Text>
              <Text>Alejandro de León Fernández</Text>
            </View>
            <View className='flex-row items-center'>
              <View className='flex-1'>
                <Text>Distancia</Text>
                <Text className='font-bold'>60,54 km</Text>
              </View>
              <View className='flex-1'>
                <Text>Tiempo</Text>
                <Text className='font-bold'>4h 17min</Text>
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
              strokeColor='#F7BD59' // Color de la línea
              strokeWidth={4} // Ancho de la línea
            />
            <Polyline
              coordinates={coordinatesSwim}
              strokeColor='#003249' // Color de la línea
              strokeWidth={4} // Ancho de la línea
            />
            <Polyline
              coordinates={coordinatesRun}
              strokeColor='#FF0000' // Color de la línea
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
              <Text className='font-bold text-xl'>Triatlón de noche</Text>
              <Text>Alejandro de León Fernández</Text>
            </View>
            <View className='flex-row items-center'>
              <View className='flex-1'>
                <Text>Distancia</Text>
                <Text className='font-bold'>35 km</Text>
              </View>
              <View className='flex-1'>
                <Text>Tiempo</Text>
                <Text className='font-bold'>2h 10min</Text>
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
        <TouchableOpacity onPress={() => navigation.push("EditUser")}>
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
