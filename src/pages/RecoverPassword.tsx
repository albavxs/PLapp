import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../Styles/RecoverPasswordStyles"; // Caminho para o arquivo de estilo
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo das rotas
import CustomText from "../components/CustomText";

const RecuperarSenhaScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, insira seu e-mail.");
      return;
    }

    setIsLoading(true);

    // Simula a recuperação de senha
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Sucesso", "Instruções para recuperação de senha foram enviadas para o seu e-mail.");
      navigation.navigate("LoginScreen"); // Navega de volta para a tela de login após o sucesso
    }, 2000);
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
