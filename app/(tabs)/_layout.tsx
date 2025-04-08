import { Tabs } from 'expo-router'
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" 
      options={{
        headerShown: false
      }}
      />
      <Tabs.Screen name="accounts" 
      options={{
        headerShown: false
      }}
      />
      <Tabs.Screen name="categories" 
      options={{
        headerShown: false
      }}
      />
    </Tabs>
  )
}
export default _layout