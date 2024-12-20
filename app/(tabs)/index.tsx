import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native'; // Certifique-se de importar Image corretamente
import { ThemedText } from '../../components/ThemedText'; // Ajuste o caminho conforme necessário
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação para navegação

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Hook de navegação

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
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        
        {/* Link para "Esqueceu a senha?" */}
        <TouchableOpacity onPress={() => router.push('/forgotpassword')}>
            <Text style={styles.forgotPasswordText}>
           Forgot password? <Text style={styles.linkText}>reset</Text>
            </Text>
         </TouchableOpacity>
         {/* Texto "Don't have an account?" */}
        <TouchableOpacity onPress={() => router.push('/createAccount')}>
          <Text style={styles.createAccountText}>
            Don't have an account? <Text style={styles.createAccountLink}>Create one</Text>
          </Text>
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
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
    socialButton: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Certifica-se de alinhar ícone e texto lado a lado
    marginTop: 15,
  },
  facebookButton: {
    backgroundColor: '#fff',
    marginTop: 90,
  },
  googleButton: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10, // Espaçamento entre o ícone e o texto
  },
  icon: {
    width: 20,
    height: 20,
  },
  createAccountText: {
    marginTop: 15,
    color: '#fff',
    fontSize: 14,
    marginRight: 46,
    width: 221,
    
  },
   forgotPasswordText: {
    marginTop: 2,
    color: '#fff',
    marginRight: 120,
   
  },
  createAccountLink: {
    color: '#7a4dff',
    textDecorationLine: 'underline',
  },
  linkText: {
  color: '#7a4dff',
  textDecorationLine: 'underline',
},
});
