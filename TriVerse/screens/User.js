import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function User() {
  const navigation = useNavigation();
  return (
    <View className='flex-1 bg-gray-300'>
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Perfil</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className='bg-gray-200'
      >
        {/* Contenido */}
        <View className='flex-row items-center p-4 bg-white mb-2'>
          <Image
            source={require("../assets/profilePic.png")}
            className='w-16 h-16 rounded-full mr-4'
            resizeMode='cover'
          />
          <View className='flex-1'>
            <Text className='text-xl font-bold mb-1'>
              Alejandro de León Fernández
            </Text>
            <Text className='stext-gray-500 mb-1'>23 años | 1,89 m</Text>
            <Text className='stext-gray-500'>Lanzarote, Islas Canarias</Text>
          </View>
        </View>
        <View className='p-4 bg-white mb-2'>
          <Text className='text-xl font-bold mb-2'>Natación</Text>
          <Text className='text-sm text-gray-600 mb-2'>Esta semana</Text>
          <View className='flex-row items-center mb-2'>
            <Text className='text-sm  mr-4 font-bold'>3,8 km</Text>
            <Text className='text-sm font-bold'>1h 42min 17s</Text>
          </View>
          <Image
            source={require("../assets/graphSwim.png")}
            className='w-full h-48'
            resizeMode='contain'
          />
        </View>
        <View className='p-4 bg-white mb-2'>
          <Text className='text-xl font-bold mb-2'>Carrera</Text>
          <Text className='text-sm text-gray-600 mb-2'>Esta semana</Text>
          <View className='flex-row items-center mb-2'>
            <Text className='text-sm  mr-4 font-bold'>42,2 km</Text>
            <Text className='text-sm font-bold'>04h 34min 26s</Text>
          </View>
          <Image
            source={require("../assets/graphRun.png")}
            className='w-full h-48'
            resizeMode='contain'
          />
        </View>
        <View className='p-4 bg-white'>
          <Text className='text-xl font-bold mb-2'>Ciclismo</Text>
          <Text className='text-sm text-gray-600 mb-2'>Esta semana</Text>
          <View className='flex-row items-center mb-2'>
            <Text className='text-sm  mr-4 font-bold'>180 km</Text>
            <Text className='text-sm font-bold'>07h 27min 46s</Text>
          </View>
          <Image
            source={require("../assets/graphBike.png")}
            className='w-full h-48'
            resizeMode='contain'
          />
        </View>
      </ScrollView>
      {/* Pie de página */}
      <View className='bg-[#007EA7] h-20 flex-row justify-around items-center'>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Icon name='home' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
