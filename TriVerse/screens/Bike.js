import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import * as Location from "expo-location";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Bike() {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([]);
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [cycling, setCycling] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    if (cycling) {
      const id = setInterval(async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocations((prevLocations) => [...prevLocations, location]);

        if (locations.length > 1) {
          const newDistance = getDistance(
            locations[locations.length - 1].coords,
            location.coords
          );
          setDistance((prevDistance) => prevDistance + newDistance);

          const newSpeed = location.coords.speed;
          setSpeed(newSpeed);
        }

        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [cycling]);

  const getDistance = (start, end) => {
    const rad = (x) => (x * Math.PI) / 180;
    const R = 6378137; // Earth's radius in meters
    const dLat = rad(end.latitude - start.latitude);
    const dLong = rad(end.longitude - start.longitude);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(start.latitude)) *
        Math.cos(rad(end.latitude)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance; // returns the distance in meters
  };

  const handleStartStop = () => {
    setCycling(!cycling);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s].map((val) => (val < 10 ? `0${val}` : val)).join(":");
  };

  const renderPolyline = () => {
    if (locations.length > 1) {
      return (
        <Polyline
          coordinates={locations.map((loc) => ({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
          }))}
          strokeColor='#007EA7'
          strokeWidth={6}
        />
      );
    }
    return null;
  };

  const renderMarker = () => {
    if (region) {
      return (
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title='Tu ubicación'
        >
          <MaterialCommunityIcons name='bike' size={24} color='blue' />
        </Marker>
      );
    }
    return null;
  };

  return (
    <View className='flex-1'>
      {/* Encabezado */}
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>Ciclismo</Text>
      </View>
      {/* Contenido de la página */}
      <View className='flex-1'>
        {region ? (
          <MapView className='w-full h-80 mb-3' region={region}>
            {renderPolyline()}
            {renderMarker()}
          </MapView>
        ) : (
          <Text className='w-full h-80 mb-3'>Loading...</Text>
        )}
        <View>
          <Text className='text-black font-bold tracking-wider text-xl mb-3 text-center'>
            Tiempo
          </Text>
          <Text className='text-black font-bold tracking-wider text-4xl mb-5 text-center'>
            {formatTime(elapsedTime)}
          </Text>
          <Text className='text-black font-bold tracking-wider text-xl mb-3 text-center'>
            Velocidad
          </Text>
          <Text className='text-black font-bold tracking-wider text-4xl mb-5 text-center'>
            {speed.toFixed(2)} km/h
          </Text>
          <Text className='text-black font-bold tracking-wider text-xl mb-3 text-center'>
            Distancia
          </Text>
          <Text className='text-black font-bold tracking-wider text-4xl mb-5 text-center'>
            {distance.toFixed(2)} km
          </Text>
        </View>
        <View className='w-full flex-row items-center justify-center'>
          <TouchableOpacity
            className='w-5/12 bg-[#003249] p-3 rounded-2xl m-1 flex-row items-center justify-center'
            onPress={handleStartStop}
          >
            <Ionicons
              name={cycling ? "pause" : "play"}
              size={24}
              color='white'
            />
          </TouchableOpacity>
          <TouchableOpacity
            className='w-5/12 bg-[#003249] p-3 rounded-2xl m-1 flex-row items-center justify-center'
            onPress={() => navigation.push("Run")}
          >
            <FontAwesome6 name='person-running' size={24} color='white' />
          </TouchableOpacity>
        </View>
      </View>
      {/* Pie de página */}
      <View className='bg-[#007EA7] h-20 flex-row justify-around items-center'>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Ionicons name='home' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
