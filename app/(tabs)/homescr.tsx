import React from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconCircle}></TouchableOpacity>
        <TouchableOpacity style={styles.iconCircle}></TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" placeholderTextColor="#AAAAAA" style={styles.searchInput} />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.categoryIcons}>
        <View style={styles.categoryCircle}>
          <Text style={styles.categoryText}>Cabelo</Text>
        </View>
        <View style={styles.categoryCircle}>
          <Text style={styles.categoryText}>Barba</Text>
        </View>
      </View>

      {/* Top Selling */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Selling</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
        <View style={styles.productCard}>
          <View style={styles.productImage}></View>
          <Text style={styles.productTitle}>Shampoo para Barba</Text>
          <Text style={styles.productPrice}>$47.00</Text>
        </View>
        <View style={styles.productCard}>
          <View style={styles.productImage}></View>
          <Text style={styles.productTitle}>Espuma de barbear</Text>
          <Text style={styles.productPrice}>
            $35.00 <Text style={styles.oldPrice}>$100.97</Text>
          </Text>
        </View>
      </ScrollView>

      {/* New In */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New In</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
        <View style={styles.newInCard}>
          <View style={styles.newInImage}></View>
        </View>
        <View style={styles.newInCard}>
          <View style={styles.newInImage}></View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navIcon}></TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}></TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}></TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    padding: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#333",
  },
  searchBar: {
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 12,
    color: "#FFFFFF",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  categoryIcons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  categoryCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  scrollRow: {
    marginBottom: 16,
  },
  productCard: {
    width: 150,
    marginRight: 16,
  },
  productImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#555",
    borderRadius: 8,
    marginBottom: 8,
  },
  productTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  oldPrice: {
    color: "#AAAAAA",
    textDecorationLine: "line-through",
  },
  newInCard: {
    width: 100,
    marginRight: 16,
  },
  newInImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#555",
    borderRadius: 8,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#555",
    borderRadius: 15,
  },
});

export default Home;
