import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { ThemedText } from '../../components/ThemedText'; // Ajuste o caminho conforme necessário
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação para navegação
import { styles } from '@/components/stylesheet';

export default function CreateAccountScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Hook de navegação

  // Função para retornar à tela de login
  const returnToLogin = () => {
    router.push('/'); // Caminho para a página de login
  };

  return (
    <LinearGradient
      colors={['#20272F', '#20272F']}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <ThemedText type="title" style={styles.text}>Create Account</ThemedText>
        
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          placeholderTextColor="#8e8e8e"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Lastname"
          placeholderTextColor="#8e8e8e"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#8e8e8e"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#8e8e8e"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8e8e8e"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        {/* Botão para retornar ao login */}
        <TouchableOpacity style={styles.button} onPress={returnToLogin}>
          <Text style={styles.buttonText}>Return to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

