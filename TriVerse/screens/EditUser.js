import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

export default function EditUser() {
  return (
    <View className='flex-1 bg-gray-300'>
      <View className='bg-[#007EA7] h-24 justify-center items-center'>
        <Text className='text-white font-bold text-2xl mt-8'>
          Editar perfil
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className='bg-gray-200'
      >
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
          </View>
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Nombre</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu nombre'
            keyboardType='email-address'
          />
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Fecha de nacimiento</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu fecha de nacimiento'
            keyboardType='email-address'
          />
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Estatura (cm)</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu estatura'
            keyboardType='email-address'
          />
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Peso (kg)</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu peso'
            keyboardType='email-address'
          />
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Género</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu género'
            keyboardType='email-address'
          />
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Lugar de residencia</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu lugar de residencia'
            keyboardType='email-address'
          />
        </View>
        <View className='bg-white items-center mb-2 p-3'>
          <Text className='mb-1'>Deporte preferido</Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2'
            placeholder='Introduce tu deporte preferido'
            keyboardType='email-address'
          />
        </View>
      </ScrollView>
      <View className='w-full items-center'>
        <TouchableOpacity
          className='w-3/4 bg-[#003249] p-3 rounded-2xl mb-3'
          onPress={() => alert("Datos guardados correctamente")}
        >
          <Text className='text-xl font-bold text-white text-center'>
            Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
