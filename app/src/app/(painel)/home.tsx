import Button from '@/components/ui/button';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className='flex-1 items-center justify-center bg-slate-900'>
      <Text className='color-red-900'>Estudai</Text>
      <Button
        onPress={() => router.push('/login')}
      >
        Home
      </Button>
    </View>
  );
}