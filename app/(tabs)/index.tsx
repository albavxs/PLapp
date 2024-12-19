import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, TouchableOpacity, Text, View, Alert } from 'react-native';
import { ThemedText } from '../../components/ThemedText'; // Ajuste o caminho conforme necessário
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulação de verificação de login (substitua por autenticação real)
    if (username === 'admin' && password === '1234') {
      Alert.alert('Login Successful');
      // Aqui você pode navegar para a tela principal ou outro fluxo
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <LinearGradient 
      colors={['#20272F', '#20272F']} 
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <ThemedText type="title" style={styles.text}>Sign In</ThemedText>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        
        />
        
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1, // Preenche a tela inteira
    justifyContent: 'flex-start', // Alinha o conteúdo ao topo
    alignItems: 'center', // Centraliza horizontalmente
    paddingTop: 70, // Adiciona um espaçamento do topo (ajuste conforme necessário)
  },
  container: {
    width: '80%', // Define a largura da tela de login
    padding: 20,
    borderRadius: 10,
    alignItems: 'center', // Alinha os componentes no centro
  },
  text: {
       fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20, // Espaço entre o título e os campos de entrada
    textAlign: 'left', // Alinha o texto à esquerda
    width: '100%', // Garante que o texto ocupe toda a largura disponível
  },
  input: {
    width: '100%', // Preenche a largura disponível
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(253, 253, 253, 0.97)', // Fundo semitransparente para contraste com o gradiente
    marginBottom: 15,
    paddingLeft: 10,
    color: '#20272Ff', // Cor do texto dos inputs
  },
  button: {
    width: '100%', // Largura total
    height: 45, // Altura do botão
    borderRadius: 25, // Bordas arredondadas
    backgroundColor: '#7a4dff', // Cor de fundo
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
    borderWidth: 2, // Largura da borda
    borderColor: '#fff', // Cor da borda
    marginTop: 5, // Espaço acima do botão
  },
  buttonText: {
    color: '#fff', // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  
  },
});
