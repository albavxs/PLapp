// screens/SplashScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>P / L</Text>
      <Text style={styles.text}>PRIME LOOK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    marginTop: 10,
  },
});
