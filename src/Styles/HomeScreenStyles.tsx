import { HomeIcon } from "lucide-react";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  HomeIcon: {
    marginTop: 50,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 60,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#272727",
    fontSize: 16,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  categories: {
    flexDirection: "row",
    marginBottom: 16,
  },
  category: {
    alignItems: "center",
    marginRight: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: "#FFFFFF"
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  product: {
    backgroundColor: "#EBEBDE",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    width: (width / 2) - 30, // Ajusta para melhor encaixe na tela
    marginHorizontal: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  productsContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  
  productsRow: {
    justifyContent: "space-between",
  },
  
  productsList: {
    paddingBottom: 30,
  },
  
  
});

export default styles;
