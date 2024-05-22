import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Swim() {
  const navigation = useNavigation();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [swim, setSwim] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (swim) {
      const id = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    } else if (!swim && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [swim]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s].map((val) => (val < 10 ? `0${val}` : val)).join(":");
  };

  const handleStartStop = () => {
    setSwim(!swim);
  };

  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Natación</Text>
      </View>
      {/* Contenido de la página */}
      <View className='flex-1 justify-center items-center'>
        <Text className='text-black font-bold tracking-wider text-2xl mb-3 text-center'>
          Distancia
        </Text>
        <Text className='text-black font-bold tracking-wider text-6xl mb-5 text-center'>
          700m
        </Text>
        <Text className='text-black font-bold tracking-wider text-2xl mb-3 text-center'>
          Tiempo
        </Text>
        <Text className='text-black font-bold tracking-wider text-7xl mb-5 text-center'>
          {formatTime(elapsedTime)}
        </Text>
      </View>
      <View className='w-full flex-row items-center justify-center mb-5'>
        <TouchableOpacity
          className='w-5/12 bg-[#003249] p-3 rounded-2xl m-1 flex-row items-center justify-center'
          onPress={handleStartStop}
        >
          <Icon name={swim ? "pause" : "play"} size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          className='w-5/12 bg-[#003249] p-3 rounded-2xl m-1 flex-row items-center justify-center'
          onPress={() => navigation.push("Bike")}
        >
          <MaterialCommunityIcons name='bike' size={24} color='white' />
        </TouchableOpacity>
      </View>
      {/* Pie de página */}
      <View className='bg-[#007EA7] h-20 flex-row justify-around items-center'>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Icon name='home' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
