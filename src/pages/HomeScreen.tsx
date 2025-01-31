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
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
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
            <Image source={require("src/assets/images/Hair.png")} style={styles.categoryImage} />
            <CustomText style={styles.categoryText}>Hair</CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CatalogScreenBeard")}>
          <View style={styles.category}>
            <Image source={require("src/assets/images/Beard.png")} style={styles.categoryImage} />
            <CustomText style={styles.categoryText}>Beard</CustomText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Top Selling */}
      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>Top Selling</CustomText>
      </View>
      <View style={styles.products}>
        <View style={styles.product}>
          <Image source={require("src/assets/images/HairCareKit.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Hair CareKit</CustomText>
          <CustomText style={styles.productPrice}>$150.00</CustomText>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/ShavingFoam.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Shaving Foam</CustomText>
          <CustomText style={styles.productPrice}>$35.00</CustomText>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/BeardShampoo.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Beard Shampoo</CustomText>
          <CustomText style={styles.productPrice}>$47.00</CustomText>
        </View>
        <View style={styles.product}>
          <Image source={require("src/assets/images/ShampooHair.png")} style={styles.productImage} />
          <CustomText style={styles.productName}>Hair Shampoo</CustomText>
          <CustomText style={styles.productPrice}>$47.00</CustomText>
        </View>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;
