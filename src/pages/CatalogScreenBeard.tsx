import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation
import { RootStackParamList } from "../../App"; // Importando a definição de tipos
import { StackNavigationProp } from "@react-navigation/stack"; // Importando StackNavigationProp
import { styles } from "../Styles/CatalogScreenHairStyles";
import CustomText from "../components/CustomText";

const products = [
  {
    id: '3',
    name: "Beard Shampoo",
    price: "$47",
    image: require('../assets/images/BeardShampoo.png'), 
  },
  {
    id: '1',
    name: "Beard Care Kit",
    price: "$150",
    image: require('../assets/images/BeardKitt.png'), 
  },
  {
    id: "2",
    name: "Shaving Foam",
    price: "$16",
    image: require('../assets/images/ShavingFoam.png'), 
  },
  {
    id: "4",
    name: "After Shave",
    price: "$25",
    image: require("../assets/images/AfterShave.png"), 
  },
 
];

// Tipagem para a navegação
type CatalogScreenNavigationProp = StackNavigationProp<RootStackParamList, "CatalogScreenBeard">;

const CatalogScreenBeard = () => {
  const navigation = useNavigation<CatalogScreenNavigationProp>();

  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductScreenBeard", { id: item.id }) // Navega para a tela de detalhes e passa o id
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

export default CatalogScreenBeard;
