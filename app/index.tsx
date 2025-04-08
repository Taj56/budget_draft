// app/index.tsx
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { hasCompletedOnboarding } from '../utils/storage';
import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const completed = await hasCompletedOnboarding();
      if (completed) {
        router.replace('/(tabs)');
      } else {
        router.replace('/onboarding/screen1');
      }
    })();
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  );
}
