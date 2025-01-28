import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../Styles/RecoverPasswordStyles"; // Caminho para o arquivo de estilo
import { useNavigation, NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo das rotas
import CustomText from "../components/CustomText";

// Tipo de rota para inserir o token
type InserirTokenScreenRouteProp = RouteProp<RootStackParamList, 'TokenScreen'>;

const InserirTokenScreen: React.FC<{ route: InserirTokenScreenRouteProp }> = ({ route }) => {
  const { email } = route.params; // Acessando o e-mail passado pela tela anterior
  const [token, setToken] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSubmit = async () => {
    if (!token || !newPassword || !confirmPassword) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://10.0.2.2:3000/api/auth/change-password", { // Substitua pela URL da sua API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword, email }), // Passando o email junto com o token e nova senha
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        Alert.alert("Sucesso", "Sua senha foi alterada com sucesso.");
        navigation.navigate("LoginScreen"); // Navega de volta para a tela de login após sucesso
      } else {
        Alert.alert("Erro", data.message || "Erro ao tentar mudar a senha.");
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Erro", "Erro ao conectar com o servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Inserir Token e Nova Senha</CustomText>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o token recebido por e-mail"
        placeholderTextColor="#666"
        value={token}
        onChangeText={setToken}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        placeholderTextColor="#666"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirme a Nova Senha"
        placeholderTextColor="#666"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      <TouchableOpacity
        style={[styles.button, isLoading && { backgroundColor: "#ccc" }]}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <CustomText style={styles.buttonText}>
          {isLoading ? "Alterando..." : "Alterar Senha"}
        </CustomText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomText style={styles.link}>Voltar para o Login</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default InserirTokenScreen;
