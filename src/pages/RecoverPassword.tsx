import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../Styles/RecoverPasswordStyles"; // Estilo
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa as rotas
import CustomText from "../components/CustomText";

const RecuperarSenhaScreen: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // Estado do e-mail
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carregamento
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Navegação

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, insira seu e-mail."); // Validação básica
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://10.0.2.2:3000/api/auth/recover-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // Envia apenas o e-mail
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        Alert.alert(
          "Sucesso",
          "Um token foi enviado para o seu e-mail. Insira-o na próxima tela."
        );

        // Navega automaticamente para a tela de inserir o token
        navigation.navigate("TokenScreen", { email });
      } else {
        Alert.alert("Erro", data.message || "Erro ao enviar o e-mail.");
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Erro", "Erro ao conectar com o servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Recuperar Senha</CustomText>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={[styles.button, isLoading && { backgroundColor: "#ccc" }]}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <CustomText style={styles.buttonText}>
          {isLoading ? "Enviando..." : "Enviar"}
        </CustomText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomText style={styles.link}>Voltar para o Login</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default RecuperarSenhaScreen;
