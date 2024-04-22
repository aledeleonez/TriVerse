import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className='bg-[#007EA7] h-full w-full'>
      <StatusBar style='light' />
      <View className='items-center pt-40'>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 200 }}
          resizeMode='contain'
          className='object-contain'
        />
      </View>
      <View className='w-full flex justify-around pt-10 pb-10'>
        <View className='flex items-center'>
          <Text className='text-white font-bold tracking-wider text-5xl mb-5'>
            Login
          </Text>
        </View>
        <View className='flex items-center mx-4 space-y-4'>
          <View className='bg-[#D9D9D9] p-5 rounded-2xl w-full mb-2'>
            <Icon
              name='envelope'
              size={24}
              color='gray'
              className='absolute left-3 top-4'
            />
            <TextInput
              placeholder='Email'
              placeholderTextColor={"gray"}
              className='ml-5'
            />
          </View>
          <View className='bg-[#D9D9D9] p-5 rounded-2xl w-full mb-3'>
            <Icon
              name='lock'
              size={24}
              color='gray'
              className='absolute left-3 top-4'
            />
            <TextInput
              placeholder='Contraseña'
              placeholderTextColor={"gray"}
              secureTextEntry
              className='ml-5'
            />
          </View>
          <View className='w-full'>
            <TouchableOpacity
              className='w-full bg-[#003249] p-3 rounded-2xl mb-3'
              onPress={() => navigation.push("Home")}
            >
              <Text className='text-xl font-bold text-white text-center'>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-center'>
            <TouchableOpacity>
              <Text className='text-white underline'>
                Olvidaste la contraseña?
              </Text>
            </TouchableOpacity>
          </View>
          <View className='w-full'>
            <TouchableOpacity
              className='w-full bg-[#003249] p-3 rounded-2xl mb-3'
              onPress={() => navigation.push("SignUp")}
            >
              <Text className='text-xl font-bold text-white text-center'>
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
