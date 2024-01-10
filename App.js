import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TurkiyeScreen from "./src/screens/TurkiyeScreen";
import ItalyScreen from "./src/screens/ItalyScreen";
import FranceScreen from "./src/screens/FranceScreen";
import JapanScreen from "./src/screens/JapanScreen";
import NetherlandsScreen from "./src/screens/NetherlandsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Turkiye"
            component={TurkiyeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Italy"
            component={ItalyScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="France"
            component={FranceScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Netherlands"
            component={NetherlandsScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Japan"
            component={JapanScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
