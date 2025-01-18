import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../Styles/LoginScreenStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo das rotas

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccountScreen")}>
          <Text style={styles.link}> Create One</Text>
        </TouchableOpacity>
      </View>
      
      {/* Adicionando navegação para a tela de recuperação de senha */}
      <TouchableOpacity onPress={() => navigation.navigate("RecoverPassword")}>
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
