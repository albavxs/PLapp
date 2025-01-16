import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Ajuste para suas rotas
import styles from "../Styles/HomeScreenStyles";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BiFace } from "react-icons/bi";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("src/assets/icons/Account.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("src/assets/images/Bag.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Image source={require("src/assets/icons/search.png")} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#272727" />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreen")}>
          <View style={styles.category}>
            <Image source={require("src/assets/images/cabelo.png")} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Cabelo</Text> 
          </View>
        </TouchableOpacity>
        <View style={styles.category}>
          <Image source={require("src/assets/images/barba.png")} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Barba</Text>
        </View>
      </View>

      {/* Top Selling */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Selling</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.products}>
        <View style={styles.product}>
          <Image source={require("src/assets/images/2.png")} style={styles.productImage} />
          <Text style={styles.productName}>Shampoo para Barba</Text>
          <Text style={styles.productPrice}>$47.00</Text>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/1.png")} style={styles.productImage} />
          <Text style={styles.productName}>Espuma de Barbear</Text>
          <Text style={styles.productPrice}>$35.00</Text>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/2.png")} style={styles.productImage} />
          <Text style={styles.productName}>Shampoo para Barba</Text>
          <Text style={styles.productPrice}>$47.00</Text>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/2.png")} style={styles.productImage} />
          <Text style={styles.productName}>Shampoo para Barba</Text>
          <Text style={styles.productPrice}>$47.00</Text>
        </View>
        
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <AiOutlineHome size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreen")}>
          <BiFace size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreen")}>
          <AiOutlineSetting size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
