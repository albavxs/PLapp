import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../Styles/LoginScreenStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo das rotas
import CustomText from "../components/CustomText"; // importa a font

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Sign in</CustomText>
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
        <CustomText style={styles.buttonText}>Continue</CustomText>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <CustomText style={styles.linkText}>Don't have an Account?</CustomText>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccountScreen")}>
          <CustomText style={styles.link}> Create One</CustomText>
        </TouchableOpacity>
      </View>
      
      {/* Adicionando navegação para a tela de recuperação de senha */}
      <TouchableOpacity onPress={() => navigation.navigate("RecoverPassword")}>
        <CustomText style={styles.link}>Forgot Password? Reset</CustomText>
      </TouchableOpacity>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={20} color="#000" />
          <CustomText style={styles.socialButtonText}>Continue With Apple</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#DB4437" />
          <CustomText style={styles.socialButtonText}>Continue With Google</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={20} color="#3b5998" />
          <CustomText style={styles.socialButtonText}>Continue With Facebook</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
