import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../Styles/CatalogScreenHairStyles";

const products = [
  {
    id: "1",
    name: "Shampoo para Cabelo",
    price: "$40",
    image: require("../assets/images/ShampCabelo.png"), // Caminho local
  },
  {
    id: "2",
    name: "Kit cuidados com o Cabelo",
    price: "$150",
    image: require("../assets/images/Kitcabelo.png"), // Caminho local
  },
  {
    id: "3",
    name: "Condicionador",
    price: "$110",
    image: require("../assets/images/cond.png"), // Caminho local
  },
 
];

const CatalogScreen = () => {
  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <TouchableOpacity style={styles.card}>
      {/* Carregando imagens locais diretamente com require */}
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
