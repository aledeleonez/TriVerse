import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Triathlon() {
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
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>
          Triatlón en Arrecife
        </Text>
      </View>
      <View>
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
            strokeColor='#f7bd59' // Color de la línea
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
        <View className='content-center ml-16'>
          <View className='flex-row justify-between mb-2'>
            <View className='flex-1 mr-2'>
              <Text className='text-gray-600'>Distancia total</Text>
              <Text className='font-bold text-lg text-gray-800'>60,54 km</Text>
            </View>
            <View className='flex-1 ml-2'>
              <Text className='text-gray-600'>Tiempo total</Text>
              <Text className='font-bold text-lg text-gray-800'>4h 17min</Text>
            </View>
          </View>
          <Text className='text-lg font-bold ml-24'>NATACIÓN</Text>
          <View className='flex-row justify-between mb-2'>
            <View className='flex-1 mr-2'>
              <Text className='text-gray-600'>Distancia</Text>
              <Text className='font-bold text-lg text-gray-800'>1040 m</Text>
            </View>
            <View className='flex-1 ml-2'>
              <Text className='text-gray-600'>Tiempo</Text>
              <Text className='font-bold text-lg text-gray-800'>27min</Text>
            </View>
          </View>
          <Text className='text-gray-600'>Ritmo</Text>
          <Text className='font-bold text-lg text-gray-800'>2:05 /100 m</Text>
          <Text className='text-lg font-bold ml-24'>CICLISMO</Text>
          <View className='flex-row justify-between mb-2'>
            <View className='flex-1 mr-2'>
              <Text className='text-gray-600'>Distancia</Text>
              <Text className='font-bold text-lg text-gray-800'>45,5 km</Text>
            </View>
            <View className='flex-1 ml-2'>
              <Text className='text-gray-600'>Tiempo</Text>
              <Text className='font-bold text-lg text-gray-800'>2h 30min</Text>
            </View>
          </View>
          <Text className='text-gray-600'>Velocidad media</Text>
          <Text className='font-bold text-lg text-gray-800'>32 km/h</Text>
          <Text className='text-lg font-bold ml-24'>CARRERA</Text>
          <View className='flex-row justify-between mb-2'>
            <View className='flex-1 mr-2'>
              <Text className='text-gray-600'>Distancia</Text>
              <Text className='font-bold text-lg text-gray-800'>14 km</Text>
            </View>
            <View className='flex-1 ml-2'>
              <Text className='text-gray-600'>Tiempo</Text>
              <Text className='font-bold text-lg text-gray-800'>1h 20min</Text>
            </View>
          </View>
          <Text className='text-gray-600'>Ritmo medio</Text>
          <Text className='font-bold text-lg text-gray-800'>5:30 min/km</Text>
        </View>
      </View>
    </View>
  );
}
