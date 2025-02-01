import React from "react";
import { View, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import styles from "../Styles/HomeScreenStyles";
import CustomText from "../components/CustomText";

// Tipagem da navegação
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const products = [
  { id: "1", name: "Hair Care Kit", price: "$150.00", image: require("../assets/images/HairCareKit.png") },
  { id: "2", name: "Shaving Foam", price: "$16.00", image: require("../assets/images/ShavingFoam.png") },
  { id: "3", name: "Beard Shampoo", price: "$47.00", image: require("../assets/images/BeardShampoo.png") },
  { id: "4", name: "Hair Shampoo", price: "$47.00", image: require("../assets/images/ShampooHair.png") },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: typeof products[0] }) => {
    // Verifica para qual tela o produto deve ir
    const targetScreen = item.id === "1" || item.id === "4" 
      ? "ProductScreenHair" as const 
      : "ProductScreenBeard" as const;

    return (
      <TouchableOpacity
        style={styles.product}
        onPress={() => navigation.navigate(targetScreen, { id: item.id })}
      >
        <Image source={item.image} style={styles.productImage} />
        <CustomText style={styles.productName}>{item.name}</CustomText>
        <CustomText style={styles.productPrice}>{item.price}</CustomText>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Image source={require("../assets/icons/Account.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Image source={require("../assets/icons/Bag.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Image source={require("../assets/icons/search.png")} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#272727" />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Categories</CustomText>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenHair")}> 
          <View style={styles.category}>
            <Image source={require("../assets/images/Hair.png")} style={styles.categoryImage} />
            <CustomText style={styles.categoryText}>Hair</CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenBeard")}> 
          <View style={styles.category}>
            <Image source={require("../assets/images/Beard.png")} style={styles.categoryImage} />
            <CustomText style={styles.categoryText}>Beard</CustomText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Top Selling */}
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Top Selling</CustomText>
      </View>

      {/* Produtos */}
      <View style={styles.productsContainer}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.productsRow}
          contentContainerStyle={styles.productsList}
          scrollEnabled={false} // Impede conflito com ScrollView
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
