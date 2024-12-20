import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native'; // Certifique-se de importar Image corretamente
import { ThemedText } from '../../components/ThemedText'; // Ajuste o caminho conforme necessário
import { LinearGradient } from 'expo-linear-gradient';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      Alert.alert('Login Successful');
      // Navegar para outra tela
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
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image
            source={require('../../assets/images/facebook.png')} // Caminho da imagem Facebook
            style={styles.icon}
          />
          <Text style={[styles.buttonText, styles.socialButtonText]}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image
            source={require('../../assets/images/google.png')} // Caminho da imagem Google
            style={styles.icon}
          />
          <Text style={[styles.buttonText, styles.socialButtonText]}>Continue with Google</Text>
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
     marginBottom: 145,
  },
  buttonText: {
    color: '#fff',
    position: 'absolute',
    fontSize: 18,
     marginTop: 0,
    fontWeight: 'bold',
  },
  socialButton: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  facebookButton: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  googleButton: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
  },
  icon: {
    
    width: 20,
    height: 20,
    marginTop: -3,
    marginRight: 235,
  },
});
