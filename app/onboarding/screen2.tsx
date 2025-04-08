import { saveUserName } from '@/utils/storage';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';

const Screen2 = () => {
  const [text, setText] = React.useState("");

  const handleNext = async () => {
    if (text.trim().length === 0) return;

    await saveUserName(text.trim());
    router.push('/onboarding/screen3');
  };

  return (
    <SafeAreaView className="bg-[#141118] flex-1">
      <View className="flex-1 px-5 relative">
        <View className="mt-10">
          <Image
            source={require('@/assets/images/wallet.png')}
            style={{ width: 55, height: 55 }}
          />
          <Text className="text-[#D1BCFF] text-4xl font-bold mt-5">
            Hello!, Welcome to Mr.Budget
          </Text>
        </View>

        <View className="mt-10">
          <Text className="text-lg text-white">What is your name?</Text>
          <TextInput
            label={"Enter your name"}
            mode="outlined"
            value={text}
            onChangeText={setText}
          />
        </View>

        <Pressable
          className="bg-[#674FA3] w-[100px] h-[50px] flex flex-row justify-center items-center rounded-lg absolute bottom-5 right-5"
          onPress={handleNext}
        >
          <Text className="text-white font-bold text-xl">Next</Text>
          <Image
            source={require('@/assets/images/arrow.png')}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;
