import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, ActivityIndicator, Alert, Linking } from "react-native";
import styles from "../Styles/LoginScreenStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import CustomText from "../components/CustomText";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Device from "expo-device";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://10.0.2.2:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        Alert.alert("Sucesso", "Login realizado com sucesso!", [
          {
            text: "OK",
            onPress: () => navigation.navigate("HomeScreen"),
          },
        ]);
      } else {
        Alert.alert("Erro", data.message || "Erro ao fazer login.");
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Erro", "Falha ao conectar-se à API.");
    }
  };

  const handleGoogleAuth = async () => {
  // Garantir que as informações do dispositivo sejam capturadas corretamente
  const deviceName = Device.modelName || "UnknownDevice";
  const deviceId = Device.osBuildId || "UnknownID";

  try {
    // Construir o link de autenticação com as informações do dispositivo
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=887525463720-3muju51cf5e6g4hi2mvvk9b4nuh06g17.apps.googleusercontent.com&redirect_uri=com.pegui.primeLookauthcallback://auth&response_type=code&scope=openid%20profile%20email&access_type=offline&prompt=consent&device_name=${encodeURIComponent(deviceName)}&device_id=${encodeURIComponent(deviceId)}`;

    console.log("Google Login URL: ", googleLoginUrl); // Adicione um log para verificar se o URL está correto

    // Abrir o link de autenticação do Google
    Linking.openURL(googleLoginUrl);
  } catch (error) {
    Alert.alert("Erro", "Erro ao iniciar o login com o Google.");
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
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
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
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleAuth}>
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
