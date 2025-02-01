// src/components/Footer.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import Icon from 'react-native-vector-icons/Ionicons'; // Certifique-se de que essa biblioteca esteja instalada

// Importar o tipo de navegação corretamente
import { RootStackParamList } from '../../App'; // Ajuste o caminho conforme necessário
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type FooterNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Footer: React.FC = () => {
  const navigation = useNavigation<FooterNavigationProp>(); // Usando o tipo correto

  return (
    <View style={styles.footer}>
      {/* Navegar para a HomeScreen */}
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Icon name="home-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Navegar para o Catalogo de Cabelo */}
      <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenHair")}>
        <Icon name="person-circle-outline" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Navegar para o Catalogo de Barba */}
      <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenBeard")}>
        <Icon name="settings-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1E1E1E',
    marginBottom: -10,

  },
});

export default Footer;
