import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import SplashScreen from "./src/pages/SplashScreen";
import HomeScreen from "./src/pages/HomeScreen";
import CatalogScreenHair from "./src/pages/CatalogScreenHair";
import CatalogScreenBeard from "./src/pages/CatalogScreenBeard";
import LoginScreen from "./src/pages/LoginScreen";
import CreateAccountScreen from "./src/pages/CreateAccountScreen";
import RecoverPassword from "./src/pages/RecoverPassword";
import ShoppingCart from "./src/pages/ShoppingCartScreen";


// Tipos para navegação
export type RootStackParamList = {
  HomeScreen: undefined;
  CatalogScreenHair: undefined;
  LoginScreen: undefined;
  CreateAccountScreen: undefined;
  EmailConfirmationScreen: undefined;
  RecoverPassword: undefined;
  CatalogScreenBeard: undefined;
  ShoppingCart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Carregando a fonte
  const [fontsLoaded] = useFonts({
    "Alata-Regular": require("./src/assets/fonts/Alata-Regular.ttf"),
  });

  // Simulando splash screen
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!fontsLoaded || isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <SplashScreen />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerTintColor: "#000",
          headerTitleStyle: { fontWeight: "bold", fontFamily: "Alata-Regular" },
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CatalogScreenHair"
          component={CatalogScreenHair}
          options={{ title: "Hair (3)" }}
        />
        <Stack.Screen
          name="CatalogScreenBeard"
          component={CatalogScreenBeard}
          options={{ title: "Beard (3)" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{ title: "Recover Password" }}
        />

        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{ title: "Shopping Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilo base
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// Exporta o App
export default App;
