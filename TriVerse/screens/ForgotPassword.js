import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ForgotPassword() {
  return (
    <View className='bg-[#007EA7] h-full w-full'>
      <StatusBar style='light' />
      <View className='flex-1 justify-center items-center p-4'>
        <View className='bg-white p-6 rounded-lg shadow-lg w-80'>
          <Text className='text-xl font-bold mb-4 text-center'>
            Olvidé la contraseña
          </Text>
          <Text className='text-gray-700 mb-4 text-center'>
            Por favor, ingresa tu correo electrónico. Te enviaremos un enlace
            para restablecer tu contraseña.
          </Text>
          <TextInput
            className='border border-gray-300 rounded px-3 py-2 mb-4'
            placeholder='Correo Electrónico'
            keyboardType='email-address'
          />
          <TouchableOpacity
            className='w-full bg-[#003249] p-3 rounded-2xl mb-3'
            onPress={() => alert("Enlace enviado")}
          >
            <Text className='text-xl font-bold text-white text-center'>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
