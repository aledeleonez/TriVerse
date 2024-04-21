import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View className='bg-[#007EA7] h-full w-full'>
      <StatusBar style='light' />
      <View className='h-full w-full flex justify-around pt-40 pb-10'>
        <View className='flex items-center'>
          <Text className='text-white font-bold tracking-wider text-5xl'>
            Registro
          </Text>
        </View>
        <View className='flex items-center mx-4 space-y-4'>
          <View className='bg-[#D9D9D9] p-5 rounded-2xl w-full'>
            <TextInput placeholder='Usuario' placeholderTextColor={"gray"} />
          </View>
          <View className='bg-[#D9D9D9] p-5 rounded-2xl w-full mb-3'>
            <TextInput
              placeholder='Email'
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          <View className='bg-[#D9D9D9] p-5 rounded-2xl w-full mb-3'>
            <TextInput
              placeholder='Contraseña'
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          <View className='w-full'>
            <TouchableOpacity className='w-full bg-[#003249] p-3 rounded-2xl mb-3'>
              <Text className='text-xl font-bold text-white text-center'>
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-center'>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className='text-white underline'>
                Ya tienes una cuenta? Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
