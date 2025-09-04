import "@/styles/global.css";

import { Text, View } from 'react-native';
import { router } from 'expo-router';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function Home() {
  return (
    <View className='flex-1 bg-gray-950 items-center pt-20'>
      <Text className='color-[#FFD93D] text-[3rem] mb-8'>Login</Text>
      <View className="flex-1 w-full px-8 py-8 bg-slate-900 rounded-t-[35px]">
        <Input
          label="Email"
          placeholder="Dgite seu email..."
        />
        <Input
          label="Passaword"
          placeholder="Dgite sua senha..."
          secureTextEntry
        />
        <Button
          onPress={() => router.push('/(painel)/home')}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}