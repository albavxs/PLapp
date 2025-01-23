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
import ProductScreen from "./src/pages/ProductScreenHair";


// Tipos para navegação
export type RootStackParamList = {
  HomeScreen: undefined;
  CatalogScreenHair: undefined;
  CatalogScreenBeard: undefined;
  LoginScreen: undefined;
  CreateAccountScreen: undefined;
  RecoverPassword: undefined;
  ShoppingCart: undefined;
  ProductScreen: { product: Product }; 

};

// Tipo de produto (ajuste conforme necessário)
export type Product = {
  id: string;
  name: string;
  price: string;
  image: any; // Ajuste para um tipo mais específico se necessário
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Carregando a fonte
  const [fontsLoaded] = useFonts({
    "Alata-Regular": require("./src/assets/Fonts/Alata-Regular.ttf"),
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
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{ title: "Product Details" }}
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
});

export default App;
