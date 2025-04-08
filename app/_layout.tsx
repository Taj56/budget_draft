import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import * as SystemUI from 'expo-system-ui'
import { useEffect } from 'react'
import './globals.css';

export default function RootLayout() {

  useEffect(() => {
    // Set nav bar background to match app theme
    SystemUI.setBackgroundColorAsync('#141118')
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#141118" />
      <Slot />
    </View>
  );
}
