import React from "react";
import {View,Text,TextInput,Image,ScrollView,TouchableOpacity,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Ajuste para suas rotas
import styles from "../Styles/HomeScreenStyles";
import Icon from "react-native-vector-icons/Ionicons"; // Import do conjunto Ionicons
import CustomText from "../components/CustomText";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Image source={require("src/assets/icons/Account.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ShoppingCart")}>
          <Image source={require("src/assets/icons/Bag.png")} style={styles.icon} />
        </TouchableOpacity>

      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Image source={require("src/assets/icons/search.png")} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#272727" />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Categories</CustomText>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenHair")}>
          <View style={styles.category}>
            <Image source={require("src/assets/images/cabelo.png")} style={styles.categoryImage} />
            <CustomText style={styles.categoryText}>Hair</CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenBeard")}>
          <View style={styles.category}>
            <Image source={require("src/assets/images/barba.png")} style={styles.categoryImage} />
            <CustomText style={styles.categoryText}>Beard</CustomText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Top Selling */}
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Top Selling</CustomText>
        <TouchableOpacity>
          <CustomText style={styles.seeAll}>See All</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.products}>
        <View style={styles.product}>
          <Image source={require("src/assets/images/HairCareKit.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Hair CareKit</CustomText>
          <CustomText style={styles.productPrice}>$150.00</CustomText>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/1.png")} style={styles.productImage} />
          <Text style={styles.productName}>Espuma de Barbear</Text>
          <Text style={styles.productPrice}>$35.00</Text>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/2.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Shampoo para Barba</CustomText>
          <CustomText style={styles.productPrice}>$47.00</CustomText>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/2.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Shampoo para Barba</CustomText>
          <CustomText style={styles.productPrice}>$47.00</CustomText>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenHair")}>
          <Icon name="person-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenHair")}>
          <Icon name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
