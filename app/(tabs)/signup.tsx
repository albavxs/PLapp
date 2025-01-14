// screens/SignupScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Firstname" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Lastname" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
      <TextInput style={styles.input} placeholder="Age Range" placeholderTextColor="#888" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
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
    fontSize: 32,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 8,
    color: "#FFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
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
