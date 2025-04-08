import AsyncStorage from '@react-native-async-storage/async-storage';

export const hasCompletedOnboarding = async () => {
  const value = await AsyncStorage.getItem('hasCompletedOnboarding');
  return value === 'true';
};

export const setOnboardingComplete = async () => {
  await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
};

export const saveUserName = async (name: string) => {
  try {
    await AsyncStorage.setItem('userName', name);
  } catch (error) {
    console.error("Error saving userName", error);
  }
}

export const getUserName = async () => {
  try {
    const name = await AsyncStorage.getItem('userName');
    return name || '';
  } catch (error) {
    console.error('Error fetching name', error);
    return '';
  }
}

const getCurrency = async () => {
  const value = await AsyncStorage.getItem('user_currency');
  if (value !== null) {
    console.log('Selected currency:', value);
  }
};
