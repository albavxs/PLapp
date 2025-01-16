import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./src/pages/SplashScreen";
import HomeScreen from "./src/pages/HomeScreen";
import CatalogScreen from "./src/pages/CatalogScreenHair";
import Icon from "react-native-vector-icons/MaterialIcons";

// Tipos das rotas
export type RootStackParamList = {
  HomeScreen: undefined;
  CatalogScreen: undefined;
};

// Criação dos navegadores
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// Componente de Navegação por Abas
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Catalog") {
          iconName = "style"; // Ícone relacionado a catálogo
        }

        // Renderiza o componente Icon corretamente
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
  </Tab.Navigator>
);

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
        {/* Substituí HomeScreen por TabNavigator */}
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
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
