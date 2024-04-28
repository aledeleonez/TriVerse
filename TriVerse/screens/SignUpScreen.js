import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const userData = {
      name: user,
      email: email,
      password: password,
    };
    try {
      const email = await fetch(
        `http://192.168.1.40:8080/users?email=${email}`
      );
      if (email) {
        Alert.alert("Ya hay un usuario vinculado a este correo electronico.");
      } else {
        const response = fetch(`http://192.168.1.40:8080/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          Alert.alert("Usuario creado correctamente");
        } else {
          Alert.alert("Error al crear usuario");
        }
      }
    } catch (error) {
      console.error("Error de red", error);
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
            Registro
          </Text>
        </View>
        <View className='flex items-center mx-4 space-y-4'>
          <View className='bg-[#D9D9D9] flex-row p-5 rounded-2xl w-full mb-2'>
            <Icon
              name='user'
              size={24}
              color='gray'
              className='absolute left-3 top-4'
            />
            <TextInput
              placeholder='Usuario'
              placeholderTextColor={"gray"}
              className='ml-5 w-full'
              value={user}
              onChangeText={(text) => setUser(text)}
            />
          </View>
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
          <View className='bg-[#D9D9D9] flex-row p-5 rounded-2xl w-full mb-2'>
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
              onPress={handleSignUp}
            >
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
