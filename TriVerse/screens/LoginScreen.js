import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.40:8080/users?email=${email}&password=${password}`
      );
      const data = await response.json();
      if (response.ok) {
        navigation.push("Home");
      } else {
        Alert.alert(data.error);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Alert.alert("Error", "Ha ocurrido un error al intentar iniciar sesión");
    }
  };

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
          <View className='bg-[#D9D9D9] flex-row p-5 rounded-2xl w-full mb-2'>
            <Icon
              name='envelope'
              size={24}
              color='gray'
              className='absolute left-3 top-4'
            />
            <TextInput
              placeholder='Email'
              placeholderTextColor={"gray"}
              className='ml-5 w-full'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View className='bg-[#D9D9D9] flex-row p-5 rounded-2xl w-full mb-3'>
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
              className='ml-5 w-full'
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View className='w-full'>
            <TouchableOpacity
              className='w-full bg-[#003249] p-3 rounded-2xl mb-3'
              //onPress={handleLogin}
              onPress={() => navigation.push("Home")}
            >
              <Text className='text-xl font-bold text-white text-center'>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-center'>
            <TouchableOpacity onPress={() => navigation.push("ForgotPassword")}>
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
