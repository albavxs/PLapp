import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#3D3B3A",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  icon: {
    width: 24,
    height: 24,
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
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: "#FFFFFF"
    
  },
  products: {
    
    justifyContent: 'space-between',
    marginBottom: 30,
    
  },
  product: {
    backgroundColor: "#EBEBDE",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  footer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginHorizontal: -70,
    marginTop: 10,
  },
  footerIcon: {
    width: 35,
    height: 35,
  },
});

export default styles;
