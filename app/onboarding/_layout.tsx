import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="screen1" options={{ headerShown: false }}/>
      <Stack.Screen name="screen2" options={{ headerShown: false }}/>
      <Stack.Screen name="screen3" options={{ headerShown: false }}/>
    </Stack>
  )
}
export default _layout