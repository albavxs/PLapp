import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: "contain"
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: '#F4F4F4',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: -10,
  },
  price: {
    fontSize: 20,
    color: '#F4F4F4',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    color:'#F4F4F4',
    marginHorizontal: 10,
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#F4F4F4',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#F4F4F4',
    marginBottom: 20,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
   
    borderRadius: 10,
  },
  reviewTextContainer: {
    flex: 1,
    
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: '#aaa',
  },
  reviewRating: {
    fontSize: 14,
    color: '#f1c40f',
  },
  addToBagButton: {
    margin: 20,
    backgroundColor: '#6c63ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToBagButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default styles;
