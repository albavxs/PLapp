import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo de rotas
import styles from "../Styles/CreateAccountStyles";
import CustomText from "../components/CustomText";

const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Estados para armazenar os dados do usuário e o estado de carregamento
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(""); // Data de nascimento
  const [isLoading, setIsLoading] = useState(false); // Controle de carregamento

  // Função para validar os campos
  const validateFields = () => {
    if (!firstName || !lastName || !email || !password || !dob) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return false;
    }
    
    // Validação simples de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Erro", "Email inválido.");
      return false;
    }

    // Validação de data de nascimento (exemplo básico)
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dobPattern.test(dob)) {
      Alert.alert("Erro", "Data de nascimento inválida. Use o formato DD/MM/YYYY.");
      return false;
    }

    return true;
  };

  // Função para criar a conta
  const handleCreateAccount = async () => {
    if (!validateFields()) {
      return; // Se os campos não passarem na validação, não envia a requisição
    }

    const requestBody = {
      firstName,
      lastName,
      email,
      password,
      dob,
    };

    setIsLoading(true); // Ativa o carregamento

    try {
      const response = await fetch("http://10.0.2.2:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // Verifique o status da resposta antes de tentar fazer o parse do JSON
      if (!response.ok) {
        const errorText = await response.text(); // Lê a resposta como texto
        console.error("Erro ao criar conta:", errorText);
        alert(errorText || "Erro ao criar conta.");
        return; // Evita continuar o fluxo se a resposta não for ok
      }

      // Se a resposta for bem-sucedida, continue com o processamento
      const data = await response.json();
      console.log("Conta criada com sucesso:", data);
      navigation.navigate("LoginScreen"); // Redireciona para a tela de login
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro ao conectar à API.");
    } finally {
      setIsLoading(false); // Desativa o carregamento
    }
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Create Account</CustomText>

      <TextInput
        style={styles.input}
        placeholder="Firstname"
        placeholderTextColor="#666"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        placeholderTextColor="#666"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={dob}
        onChangeText={setDob}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <CustomText style={styles.buttonText}>Continue</CustomText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
