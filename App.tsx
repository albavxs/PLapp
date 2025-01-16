import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/pages/SplashScreen";
import HomeScreen from "./src/pages/HomeScreen";
import CatalogScreen from "./src/pages/CatalogScreenHair";

// Tipos das rotas
export type RootStackParamList = {
  HomeScreen: undefined;
  CatalogScreen: undefined;
};

// Criação do navegador de pilha
const Stack = createStackNavigator<RootStackParamList>();

// Componente Principal do App
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <SplashScreen />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CatalogScreen"
          component={CatalogScreen}
          options={{
            title: "Cabelo (3)",
            headerStyle: { backgroundColor: "#f9f9f9" },
          }}
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
