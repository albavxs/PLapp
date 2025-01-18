import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; // Importa o tipo de rotas
import styles from '../Styles/CreateAccountStyles';

const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleContinue = () => {
    // Navega para a tela 
    navigation.navigate('EmailConfirmationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <TextInput style={styles.input} placeholder="Firstname" placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder="Lastname" placeholderTextColor="#666" />
      <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#666" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry />
      
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        placeholderTextColor="#666"
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
