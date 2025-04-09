import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { setOnboardingComplete } from '@/utils/storage';

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'JMD', name: 'Jamaican Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'TTD', name: 'Trinidad Dollar' },
  { code: 'INR', name: 'Indian Rupee' },
];

const Screen3 = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const finishOnboarding = async () => {
    await setOnboardingComplete();
    router.replace('/(tabs)');
  };

  const handleSelect = async (code: string) => {
    setSelectedCurrency(code);
    await AsyncStorage.setItem('user_currency', code);
  };

  const filteredCurrencies = currencies.filter((currency) =>
    currency.code.toLowerCase().includes(search.toLowerCase()) ||
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-[#141118] px-5 relative">
      {/* Header */}
      <View className="mt-10">
        <Image
          source={require('@/assets/images/currency.png')}
          style={{ width: 55, height: 55 }}
        />
        <Text className="text-[#D1BCFF] text-4xl font-bold mt-5">
          Select Your Currency
        </Text>
      </View>

      {/* Search Bar */}
      <View className="mt-8">
        <TextInput
          value={search}
          onChangeText={setSearch}
          label="Search"
          mode="outlined"
          theme={{ colors: { text: 'white', primary: '#674FA3', placeholder: 'gray' } }}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className="mt-5 mb-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 160 }}
      >
        <View className="flex flex-wrap flex-row justify-between gap-5">
          {filteredCurrencies.map((currency) => (
            <Pressable
              key={currency.code}
              onPress={() => handleSelect(currency.code)}
              className={`w-[150px] h-[150px] rounded-xl justify-center items-center ${
                selectedCurrency === currency.code
                  ? 'bg-[#674FA3]'
                  : 'bg-[#2D2A35]'
              }`}
            >
              <Text className="text-white text-xl font-bold">{currency.code}</Text>
              <Text className="text-white text-sm mt-2">{currency.name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Finish Button (outside ScrollView, fixed at bottom) */}
      <View className="absolute bottom-10 right-10">
        <Pressable
          onPress={finishOnboarding}
          className="bg-[#674FA3] px-8 py-4 rounded-lg w-[120px] flex flex-row gap-2"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
          }}
        >
          <Text className="text-white font-bold text-lg">Finish</Text>
          <Image source={require('@/assets/images/arrow.png')} 
          style={{width: 30, height: 30}}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen3;
