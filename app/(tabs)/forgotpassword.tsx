import React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação do hook de navegação
import { styles } from '@/components/stylesheet';
export default function ForgotPassword() {
  const router = useRouter(); // Hook de navegação

  // Função para voltar ao login (index.tsx)
  const returnToLogin = () => {
    router.push('/'); // Navegar de volta para a página de login (index.tsx)
  };

  return (
    <LinearGradient
      colors={['#20272F', '#20272F']}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Text style={styles.text}>We sent an email to reset your password.</Text>
        
        {/* Botão para retornar ao login */}
        <TouchableOpacity style={styles.button} onPress={returnToLogin}>
          <Text style={styles.buttonText}>Return to Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

