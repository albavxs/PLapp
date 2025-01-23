import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "../Styles/LoginScreenStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo das rotas
import CustomText from "../components/CustomText"; // importa a font

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Estados para email e senha
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Corpo da requisição
      const requestBody = {
        email,
        password,
      };

      // Requisição à API
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        // Login bem-sucedido
        console.log("Login bem-sucedido:", data);
        // Redirecionar para outra tela, se necessário
        navigation.navigate("HomeScreen");
      } else {
        // Exibir mensagem de erro
        console.error("Erro no login:", data.message);
        alert(data.message || "Erro ao fazer login.");
      }
    } catch (error) {
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
        onChangeText={setEmail} // Atualiza o estado do email
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Atualiza o estado da senha
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <CustomText style={styles.buttonText}>Continue</CustomText>
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
    </View>
  );
};

export default LoginScreen;
