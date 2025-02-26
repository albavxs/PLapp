import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Switch } from 'react-native'; 
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; 
import { RootStackParamList } from '../../App'; 
import { StackNavigationProp } from '@react-navigation/stack'; 
import { styles } from '../Styles/ConfigScreenStyles'; 

// Definindo o tipo da navegação
type ConfigScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ConfigScreen'>;

const ConfigScreen: React.FC = () => {
  const navigation = useNavigation<ConfigScreenNavigationProp>();

  const [theme, setTheme] = React.useState('light');
  const [notifications, setNotifications] = React.useState(false);
  const [language, setLanguage] = React.useState('pt');

  const saveSettings = () => {
    // Lógica para salvar as configurações
    console.log('Configurações salvas!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      {/* Tema */}
      <View style={styles.configItem}>
        <Text style={styles.label}>Tema:</Text>
        <Picker
          selectedValue={theme}
          onValueChange={(itemValue) => setTheme(itemValue)}>
          <Picker.Item label="Claro" value="light" />
          <Picker.Item label="Escuro" value="dark" />
        </Picker>
      </View>

      {/* Notificações */}
      <View style={styles.configItem}>
        <Text style={styles.label}>Notificações:</Text>
        <Switch
          value={notifications}
          onValueChange={(value) => setNotifications(value)}
        />
      </View>

      {/* Idioma */}
      <View style={styles.configItem}>
        <Text style={styles.label}>Idioma:</Text>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}>
          <Picker.Item label="Português" value="pt" />
          <Picker.Item label="Inglês" value="en" />
        </Picker>
      </View>

      {/* Botão para salvar as configurações */}
      <TouchableOpacity style={styles.saveButton} onPress={saveSettings}>
        <Text style={styles.saveButtonText}>Salvar Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfigScreen;
