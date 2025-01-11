// screens/ResetPasswordScreen.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Sent you an Email</Text>
      <Text style={styles.text}>to reset your password.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Return to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    color: "#888",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#7B61FF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
