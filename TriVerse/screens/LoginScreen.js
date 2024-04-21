import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
            <Text className="text-white font-bold tracking-wider text-5xl">
                Login
            </Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
            <View className="bg-black/5 p-5 rounded-2xl w-full">
                <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
            </View>
            <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                <TextInput placeholder='Contraseña' placeholderTextColor={'gray'} secureTextEntry/>
            </View>
            <View className="w-full">
                <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">Login</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Text>No tienes una cuenta?</Text>
                <TouchableOpacity>
                    <Text className="text-sky-600">Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}