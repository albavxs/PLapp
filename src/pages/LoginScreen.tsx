import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../Styles/LoginScreenStyles"; // Caminho para o arquivo de estilos
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar os ícones

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <Text style={styles.linkText}>Don't have an Account?</Text>
        <TouchableOpacity>
          <Text style={styles.link}> Create One</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.link}>Forgot Password? Reset</Text>
      </TouchableOpacity>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={20} color="#000" />
          <Text style={styles.socialButtonText}>Continue With Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#DB4437" />
          <Text style={styles.socialButtonText}>Continue With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={20} color="#3b5998" />
          <Text style={styles.socialButtonText}>Continue With Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
