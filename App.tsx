import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useFonts } from "expo-font";  // Importando o hook do expo-font
import SplashScreen from "./src/pages/SplashScreen";
import HomeScreen from "./src/pages/HomeScreen";
import CatalogScreen from "./src/pages/CatalogScreenHair";
import CatalogScreenBeard from "./src/pages/CatalogScreenBeard";
import LoginScreen from "./src/pages/LoginScreen"; // Tela de Login
import CreateAccountScreen from "./src/pages/CreateAccountScreen"; // Tela de Criar Conta
import RecoverPassword from "./src/pages/RecoverPassword"; // Tela de Recuperação de Senha


export type RootStackParamList = {
  HomeScreen: undefined;
  CatalogScreen: undefined;
  LoginScreen: undefined;
  CreateAccountScreen: undefined;
  EmailConfirmationScreen: undefined;
  RecoverPassword: undefined;
  CatalogScreenBeard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Usando o hook useFonts para carregar a fonte personalizada
  const [fontsLoaded] = useFonts({
    'Alata': require('./src/assets/fonts/Alata-Regular.ttf'), // Font personalizada
  });

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
          headerTitleStyle: { fontWeight: "bold", fontFamily: 'Alata' }, // Aplicando a fonte personalizada ao título
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CatalogScreen"
          component={CatalogScreen}
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

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: 'Alata', // Aplicando a fonte personalizada ao texto
    fontSize: 18,
  },
});

export default App;
