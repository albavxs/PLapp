import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // Importa o tipo de rotas
import styles from "../Styles/CreateAccountStyles";
import CustomText from "../components/CustomText";

const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleContinue = () => {
    // Substituir pela lógica apropriada para continuar
    navigation.navigate("HomeScreen"); // Alterado para navegar para "HomeScreen"
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Create Account</CustomText>

      <TextInput
        style={styles.input}
        placeholder="Firstname"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        placeholderTextColor="#666"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <CustomText style={styles.buttonText}>Continue</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
