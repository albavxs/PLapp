import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação do hook de navegação

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
    marginTop: 55,
    textAlign: 'center',
    width: '100%',
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
