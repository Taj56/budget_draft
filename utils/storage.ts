import AsyncStorage from '@react-native-async-storage/async-storage';

export const hasCompletedOnboarding = async () => {
  const value = await AsyncStorage.getItem('hasCompletedOnboarding');
  return value === 'true';
};

export const setOnboardingComplete = async () => {
  await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
};