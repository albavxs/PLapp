import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../pages/HomeScreen"; // Altere o caminho para o correto
import CatalogScreen from "../pages/CatalogScreenHair"; // Altere o caminho para o correto
import RecoverPassword from "../pages/RecoverPassword";
import ConfigScreen from "../pages/ConfigScreen"; // Altere o caminho para o correto

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: "Cabelo" }} />
        <Stack.Screen name="Recover" component={RecoverPassword} options={{ title: "Cabelo" }} />
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} options={{ title: "Configurações" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
