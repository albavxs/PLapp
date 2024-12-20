import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { ThemedText } from '../../components/ThemedText'; // Ajuste o caminho conforme necessário
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação para navegação

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

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 70,
  },
  container: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(253, 253, 253, 0.97)',
    marginBottom: 15,
    paddingLeft: 10,
    color: '#20272F',
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#7a4dff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
