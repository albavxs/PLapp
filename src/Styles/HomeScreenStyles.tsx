import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    padding: 45,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 10,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor:'#3D3B3A'
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 36,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#AAA',
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    padding: 16,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 35,
    backgroundColor: '#333',
  },
  categoryText: {
    color: '#FFF',
    marginTop: 10,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
    padding: 16,
  },
  product: {
    width: '48%',
    backgroundColor: '#EBEBDE',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#555',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'contain'
  },
  productName: {
    color: '#272727',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    color: '#272727',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productOldPrice: {
    color: '#AAA',
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  footerIcon: {
    width: 35,
    height: 35,
  },
});

export default HomeScreenStyles;
