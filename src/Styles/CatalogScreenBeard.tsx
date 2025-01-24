import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
 
  list: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#EBEBDE",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
    flex: 1,
    marginHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: "#666",
  },
});
