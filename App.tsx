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
import ProductScreenHair from "./src/pages/ProductScreenHair";
import ProductScreenBeard from "./src/pages/ProductScreenBeard";
import TokenScreen from "./src/pages/TokenScreen"; // Importando a tela correta
import Footer from "./src/components/Footer"; // Importando o footer
import ConfigScreen from "./src/pages/ConfigScreen";

// Tipos para navegação
export type RootStackParamList = {
  HomeScreen: undefined;
  CatalogScreenHair: undefined;
  CatalogScreenBeard: undefined;
  LoginScreen: undefined;
  CreateAccountScreen: undefined;
  RecoverPassword: undefined;
  CartScreen: undefined;
  ProductScreenHair: { id: string };
  ProductScreenBeard: { id: string };
  ConfigScreen: undefined;
  TokenScreen: { email: string }; // Definindo corretamente o parâmetro
};

// Tipo de produto
export type Product = {
  id: string;
  name: string;
  price: string;
  image: any; // Ajuste para um tipo mais específico se necessário (ex: ImageSourcePropType)
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Carregando a fonte personalizada
  const [fontsLoaded] = useFonts({
    "Alata-Regular": require("./src/assets/fonts/Alata-Regular.ttf"),
  });

  // Simula a splash screen
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // 2 segundos
    return () => clearTimeout(timeout);
  }, []);

  // Mostra a tela de carregamento enquanto a fonte ou a splash não finalizam
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
          ...TransitionPresets.SlideFromRightIOS, // Transição ao navegar entre telas
        }}
      >
        {/* Tela inicial */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Catálogo de produtos para cabelo */}
        <Stack.Screen
          name="CatalogScreenHair"
          component={CatalogScreenHair}
          options={{ title: "Hair (4)" }}
        />

        {/* Catálogo de produtos para barba */}
        <Stack.Screen
          name="CatalogScreenBeard"
          component={CatalogScreenBeard}
          options={{ title: "Beard (4)" }}
        />

        {/* Tela de login */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        {/* Tela de criação de conta */}
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />

        {/* Tela de recuperação de senha */}
        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{ title: "Recover Password" }}
        />
        {/* Tela de detalhes do produto para cabelo */}
        <Stack.Screen
          name="ProductScreenHair"
          component={ProductScreenHair}
          options={{ title: "Product Detail" }}
        />

        {/* Tela de detalhes do produto para barba */}
        <Stack.Screen
          name="ProductScreenBeard"
          component={ProductScreenBeard}
          options={{ title: "Product Detail" }}
        />

        {/* Tela do token */}
        <Stack.Screen
          name="TokenScreen"
          component={TokenScreen}
          options={{ title: "Token Screen" }}
        />

        <Stack.Screen
          name="ConfigScreen"
          component={ConfigScreen}
          options={{ title: " Config Screen" }}
        />
      </Stack.Navigator>

      {/* Adiciona o Footer abaixo da navegação */}
      <Footer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
