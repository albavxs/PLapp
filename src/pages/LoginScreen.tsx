import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../Styles/LoginScreenStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo das rotas
import CustomText from "../components/CustomText"; // importa a font
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Estados para email, senha e controle de carregamento
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Adicionado para controle de carregamento

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true); // Ativa o carregamento

    try {
      const requestBody = { email, password };

      const response = await fetch("http://10.0.2.2:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      setIsLoading(false); // Desativa o carregamento

      if (response.ok) {
        console.log("Login bem-sucedido:", data);
        navigation.navigate("HomeScreen");
      } else {
        console.error("Erro no login:", data.message);
        alert(data.message || "Erro ao fazer login.");
      }
    } catch (error) {
      setIsLoading(false); // Desativa o carregamento
      console.error("Erro de conexão:", error);
      alert("Erro ao conectar à API.");
    }
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Sign in</CustomText>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address" // Melhor para email
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <CustomText style={styles.buttonText}>Continue</CustomText>
        )}
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <CustomText style={styles.linkText}>Don't have an Account?</CustomText>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccountScreen")}>
          <CustomText style={styles.link}> Create One</CustomText>
        </TouchableOpacity>
      </View>

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
