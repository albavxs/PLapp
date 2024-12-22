import React, { useState } from 'react';
import {TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native'; // Certifique-se de importar Image corretamente
import { ThemedText } from '../../components/ThemedText'; // Ajuste o caminho conforme necessário
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importação para navegação
import { styles } from '@/components/stylesheet';

export default function homescr() {
    const [search, setSearch] = useState('');
  const router = useRouter(); // Hook de navegação

  // Função para voltar ao login (index.tsx)
  const returnToLogin = () => {
    router.push('/'); // Navegar de volta para a página de login (index.tsx)
  };
    return (
        <LinearGradient 
        colors={['#20272F', '#20272F']}
        style={styles.gradientContainer}
        >
            <View style={styles.container}>
            {/* Botão para retornar ao login */}
            
                <TextInput
                         style={styles.inputhomescr}
                         placeholder="Search"
                         placeholderTextColor="#8e8e8e"
                         value={search}
                         onChangeText={setSearch}
                       />
                   <TouchableOpacity style={styles.productsb} >
                   <Image 
                   source={require('../../assets/images/kingsmanbeard.png')}
                   style={styles.imageproductsb}

                        
                    />
                     
                    
                        
                   <Image  
                    source={require('../../assets/images/luxerootspng.png')}
                   style={styles.imageproductsl}
                   />
                   
                    
                   </TouchableOpacity>
                   
            </View>
        </LinearGradient>
    );
}
