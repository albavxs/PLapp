import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo de rotas
import styles from "../Styles/CreateAccountStyles";
import CustomText from "../components/CustomText";

// Função para gerar uma senha forte
const generateRandomPassword = (length = 12) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+[]{}|;:,.<>?";

  const guaranteeChars = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    special[Math.floor(Math.random() * special.length)],
  ];

  const allChars = upper + lower + numbers + special;
  const remainingLength = length - guaranteeChars.length;
  const passwordChars = [...guaranteeChars];

  for (let i = 0; i < remainingLength; i++) {
    passwordChars.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join("");
};

// Validação da senha
const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\[\]{}|;:,.<>?]).{8,}$/;
  return passwordRegex.test(password);
};

const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Estados para armazenar os dados do usuário e o estado de carregamento
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(""); // Data de nascimento
  const [isLoading, setIsLoading] = useState(false);

  // Valida os campos
  const validateFields = () => {
    if (!firstName || !lastName || !email || !dob) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return false;
    }

    // Validação do email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Erro", "Email inválido.");
      return false;
    }

    // Validação de data de nascimento
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dobPattern.test(dob)) {
      Alert.alert("Erro", "Data de nascimento inválida. Use o formato DD/MM/YYYY.");
      return false;
    }

    return true;
  };

  // Cria a conta
  const handleCreateAccount = async () => {
  if (!validateFields()) return;

  let finalPassword = password;

  if (!finalPassword) {
    finalPassword = generateRandomPassword();
    Alert.alert("Aviso", `Nenhuma senha foi inserida. Sua senha gerada é: ${finalPassword}`);
  } else if (!validatePassword(finalPassword)) {
    Alert.alert(
      "Erro",
      "A senha deve ter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais."
    );
    return;
  }

  const requestBody = {
    firstName,
    lastName,
    email,
    password: finalPassword,
    dob,
  };

  setIsLoading(true);

  try {
    const response = await fetch("http://10.0.2.2:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      let errorText;
      try {
        errorText = await response.text();
      } catch {
        errorText = "Erro desconhecido.";
      }
      console.error("Erro ao criar conta:", errorText);
      Alert.alert("Erro", errorText || "Erro ao criar conta.");
      return;
    }

    const data = await response.json();
    console.log("Conta criada com sucesso:", data);
    Alert.alert("Sucesso", "Conta criada com sucesso!");
    navigation.navigate("LoginScreen");
  } catch (error) {
    console.error("Erro de conexão:", error);
    Alert.alert("Erro", "Erro ao conectar à API.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Create Account</CustomText>

      <TextInput style={styles.input} placeholder="Firstname" placeholderTextColor="#666" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Lastname" placeholderTextColor="#666" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#666" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Date of Birth (DD/MM/YYYY)" placeholderTextColor="#666" keyboardType="numeric" value={dob} onChangeText={setDob} />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount} disabled={isLoading}>
        {isLoading ? <ActivityIndicator size="small" color="#fff" /> : <CustomText style={styles.buttonText}>Continue</CustomText>}
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
