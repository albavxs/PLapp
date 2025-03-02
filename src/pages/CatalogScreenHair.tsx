import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation
import { RootStackParamList } from "../../App"; // Importando a definição de tipos
import { StackNavigationProp } from "@react-navigation/stack"; // Importando StackNavigationProp
import { styles } from "../Styles/CatalogScreenHairStyles";
import CustomText from "../components/CustomText";

const products = [
  {
    id: "4",
    name: "Hair Shampoo",
    price: "$40",
    image: require("../assets/images/ShampooHair.png"), // Caminho local
  },
  {
    id: "1",
    name: "Hair Care Kit",
    price: "$150",
    image: require("../assets/images/HairCareKit.png"), // Caminho local
  },
  {
    id: "3",
    name: "Hydration Cream",
    price: "$110",
    image: require("../assets/images/Hydra.png"), // Caminho local
  },
  {
    id: "2",
    name: "Hair Conditioner",
    price: "$110",
    image: require("../assets/images/cond.png"), // Caminho local
  },
];

// Tipagem para a navegação
type CatalogScreenNavigationProp = StackNavigationProp<RootStackParamList, "CatalogScreenHair">;

const CatalogScreenHair = () => {
  const navigation = useNavigation<CatalogScreenNavigationProp>();

  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductScreenHair", { id: item.id }) // Navega para a tela de detalhes e passa o id
      }
    >
      <Image source={item.image} style={styles.image} />
      <CustomText style={styles.name}>{item.name}</CustomText>
      <CustomText style={styles.price}>{item.price}</CustomText>
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
