import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../Styles/CatalogScreenStyles";

const products = [
  {
    id: "1",
    name: "Shampoo para Cabelo",
    price: "$40",
    image: "https://via.placeholder.com/100", // Substitua pelo link correto da imagem
  },
  {
    id: "2",
    name: "Kit cuidados com o Cabelo",
    price: "$150",
    image: "https://via.placeholder.com/100", // Substitua pelo link correto da imagem
  },
  {
    id: "3",
    name: "Condicionador",
    price: "$110",
    image: "https://via.placeholder.com/100", // Substitua pelo link correto da imagem
  },
  {
    id: "4",
    name: "Men's Ice-Dye Pullover Hoodie",
    price: "$128.97",
    image: "https://via.placeholder.com/100", // Substitua pelo link correto da imagem
  },
];

const CatalogScreen = () => {
  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cabelo (5)</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default CatalogScreen;
