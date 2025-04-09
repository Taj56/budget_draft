import { router } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen1 = () => {
  return (
    <SafeAreaView className="bg-[#141118] flex-1">
      <View className="flex-1 px-5 relative">
        <Text className="text-[#D1BCFF] text-4xl font-bold">Mr.Budget</Text>
        <Text className="text-[#F3EFFE] text-2xl mt-5">
          Easy method to manage{'\n'}your savings
        </Text>

        <View className="mt-14 gap-4">
          {[
            'Simple expense monitoring for more accurate budgeting.',
            'Keep track of your spending whenever \nand wherever you are.',
            'All information is stored locally \nand offline on your device.',
            'Visualize spending with our charts.',
          ].map((text, index) => (
            <View
              key={index}
              className="flex-row gap-2 justify-start items-start"
            >
              <Image
                source={require('@/assets/images/check.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text className="text-[#F3EFFE] text-xl">{text}</Text>
            </View>
          ))}
        </View>

        <Text className="text-[#F3EFFE] text-lg absolute bottom-24 left-5">
          *This app is still in development. Nothing you see is 100% accurate to release.
        </Text>

        <Pressable
          className="bg-[#674FA3] py-3 rounded-lg absolute bottom-5 left-5 right-5"
          onPress={() => router.push('/onboarding/screen2')}
        >
          <Text className="text-white text-lg text-center font-bold">
            Get Started
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;
