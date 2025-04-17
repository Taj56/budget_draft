import { Tabs } from 'expo-router';
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ImageBackground, Image, Text, View } from 'react-native';


function TabIcon({ focused, icon, title }: any) {
  if (focused) {
      return (
          <ImageBackground
              source={images.highlight}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-lg overflow-hidden"
          >
              <Image source={icon} tintColor="#151312" className="size-5" />
              <Text className="text-secondary text-base font-semibold ml-2">
                  {title}
              </Text>
          </ImageBackground>
      );
  }

  return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
          <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
  );
}


const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
      },
      tabBarStyle: {
          backgroundColor: "#35343A",
          height: 52,
          borderWidth: 1,
          borderColor: "#0F0D23",
      },
  }}
    >
      <Tabs.Screen name="index" 
      options={{
        headerShown: false,
        title: 'Home',
        // @ts-ignore
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.home} title="Home" />
      ),
      }}
      />
      <Tabs.Screen name="accounts" 
      options={{
        headerShown: false,
        title: 'Accounts',
        // @ts-ignore
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.wallet} title="Accounts" />
        ),
      }}
      />
      <Tabs.Screen name="categories" 
      options={{
        headerShown: false,
        title: 'Categories',
        // @ts-ignore
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.category} title="Categories" />
        ),
      }}
      />
      <Tabs.Screen name="settings" 
      options={{
        headerShown: false,
        title: 'Settings',
        // @ts-ignore
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.settings} title="Settings" />
        ),
      }}
      />
    </Tabs>
  )
}
export default _layout