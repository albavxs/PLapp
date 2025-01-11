import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { styles } from '@/components/Stylesheet';

// Dados das categorias
const categories = [
  {
    id: '1',
    name: 'Cabelo',
    image: require('../../assets/images/luxerootspng.png'),
  },
  {
    id: '2',
    name: 'Barba',
    image: require('../../assets/images/kingsmanbeard.png'),
  },
];

// Dados dos produtos
const products = [
  {
    id: '1',
    name: 'Shampoo para Barba',
    price: '$10.00',
    image: require('../../assets/images/shampoo.png'),
  },
  {
    id: '2',
    name: 'Espuma para Barba',
    price: '$20.00',
    image: require('../../assets/images/colection.png'),
  },
  {
    id: '3',
    name: 'Óleo para Barba',
    price: '$30.00',
    image: require('../../assets/images/shampoolike.png'),
  },
  {
    id: '4',
    name: 'Gel de Barbear',
    price: '$30.00',
    image: require('../../assets/images/colection.png'),
  },
];

// Tipos de dados
type Category = {
  id: string;
  name: string;
  image: any;
};

type Product = {
  id: string;
  name: string;
  price: string;
  image: any;
};

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Componente do Card da Categoria
  const CategoryCard = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryCard} onPress={() => alert(`Category: ${item.name}`)}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Componente do Card do Produto
  const ProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Selected: ${item.name}`)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  // Função para renderizar seções
  const renderSection = ({ item }: { item: any }) => {
    if (item.type === 'category') {
      return (
        <FlatList
          horizontal
          data={item.data}
          renderItem={({ item }) => <CategoryCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoryList}
          showsHorizontalScrollIndicator={false}
        />
      );
    }
    if (item.type === 'product') {
      return (
        <FlatList
          data={item.data}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      );
    }
    return null;
  };

  // Dados da lista principal
  const data = [
    { type: 'category', data: categories },
    { type: 'product', data: products },
  ];

  return (
    <LinearGradient colors={['#20272F', '#20272F']} style={styles.gradientContainer}>
      <View style={styles.container}>
        {/* Campo de Pesquisa */}
        <TextInput
          style={styles.inputhomescr}
          placeholder="Search"
          placeholderTextColor="#8e8e8e"
          value={search}
          onChangeText={setSearch}
        />

        {/* FlatList Principal */}
        <FlatList
          data={data}
          renderItem={renderSection}
          keyExtractor={(item, index) => `section-${index}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}
