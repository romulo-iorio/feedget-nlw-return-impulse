import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { theme } from "./src/theme";
import Widget from "./src/components/Widget";

const onLayoutRootView = async (fontsLoaded: boolean) => {
  if (fontsLoaded) await SplashScreen.hideAsync();
};

const handleSplashScreen = async (fontsLoaded: boolean) => {
  if (fontsLoaded) await SplashScreen.preventAutoHideAsync();
  await SplashScreen.hideAsync();
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    handleSplashScreen(fontsLoaded);
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View
      style={{ backgroundColor: theme.colors.background, flex: 1 }}
      onLayout={() => onLayoutRootView(fontsLoaded)}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
