import { router } from 'expo-router'
import { View, Text, SafeAreaView, Image, Button, Pressable } from 'react-native'
const screen1 = () => {
  return (
    <SafeAreaView className='bg-[#141118] w-full h-screen px-5 relative'>
      <Text className='text-[#D1BCFF] text-4xl font-bold'>Mr.Budget</Text>
      <Text className='text-[#F3EFFE] text-2xl mt-5'>
        Easy method to mange 
        your savings
      </Text>

      <View className='mt-14 gap-4 flex justify-start'>

        <View className='w-full flex flex-row gap-2 justify-start items-center'>
            <Image source={require('@/assets/images/check.png')}
            style={{width: 20, height: 20}}
            />
            <Text className='text-[#F3EFFE] text-xl'>
              Simple expense monitoring for more accurate budgeting.
            </Text>
        </View>

        <View className='w-full flex flex-row gap-2 justify-start items-center'>
            <Image source={require('@/assets/images/check.png')}
            style={{width: 20, height: 20}}
            />
            <Text className='text-[#F3EFFE] text-xl'>
              Keep track of your spending whenever {"\n"} and wherever you are.
            </Text>
        </View>

        <View className='flex flex-row gap-2 justify-start items-center'>
            <Image source={require('@/assets/images/check.png')}
            style={{width: 20, height: 20}}
            />
            <Text className='text-[#F3EFFE] text-xl'>
              All information is stored locally {"\n"} and offline on your device.
            </Text>
        </View>

        <View className='flex flex-row gap-2 justify-start items-center '>
            <Image source={require('@/assets/images/check.png')}
            style={{width: 20, height: 20}}
            />
            <Text className='text-[#F3EFFE] text-xl'>
              Visualize spending with our charts.
            </Text>
        </View>

      </View>

        <Text className='text-[#F3EFFE] text-lg absolute mt-10 left-10 bottom-20'>
          *This app is still in development.
        </Text>

      <Pressable className='bg-[#674FA3] py-3 rounded-full absolute bottom-5 left-5 w-full'
      onPress={() => router.push('/onboarding/screen2')}
      >
        <Text className='text-white text-lg text-center font-bold'>Get Started</Text>
      </Pressable>

    </SafeAreaView>
  )
}
export default screen1