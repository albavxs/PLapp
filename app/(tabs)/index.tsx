import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação para navegação
import { styles } from '@/components/stylesheet';
import { ThemedText } from '@/components/ThemedText'; // Ajuste o caminho conforme necessário

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Hook de navegação

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      Alert.alert('Login Successful');
      router.push('/homescr'); // Redireciona para a tela homescr.tsx
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <LinearGradient
      colors={['#20272F', '#20272F']}
      style={styles.gradientContainer}
    >
      <View style={styles.container}> // funciona como div pai
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

        {/* Link para criar uma nova conta */}
        <TouchableOpacity onPress={() => router.push('/createAccount')}>
          <Text style={styles.createAccountText}>
            Don't have an account? <Text style={styles.createAccountLink}>Create one</Text>
          </Text>
        </TouchableOpacity>

        {/* Botão para login social com Facebook */}
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image
            source={require('../../assets/images/facebook.png')}
            style={styles.icon}
          />
          <Text style={[styles.buttonText, styles.socialButtonText]}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Botão para login social com Google */}
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.icon}
          />
          <Text style={[styles.buttonText, styles.socialButtonText]}>Continue with Google</Text>
        </TouchableOpacity>


      </View>  //fim da view
    </LinearGradient>
  );
}

