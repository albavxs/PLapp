import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Product } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Styles/CatalogScreenHairStyles";

const products: Product[] = [
  {
    id: "1",
    name: "Shampoo para Cabelo",
    price: "$40",
    image: require("../assets/images/ShampCabelo.png"),
  },
  {
    id: "2",
    name: "Kit cuidados com o Cabelo",
    price: "$150",
    image: require("../assets/images/Kitcabelo.png"),
  },
  {
    id: "3",
    name: "Condicionador",
    price: "$110",
    image: require("../assets/images/cond.png"),
  },
];

type CatalogScreenHairNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CatalogScreenHair"
>;

const CatalogScreenHair: React.FC = () => {
  const navigation = useNavigation<CatalogScreenHairNavigationProp>();

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductScreen", { product: item })}
    >
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

export default CatalogScreenHair;
