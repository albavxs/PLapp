import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import styles from '../Styles/ProductScreenBeardStyles';
import CustomText from 'src/components/CustomText';
import { RootStackParamList } from '../../App'; // Importe seu RootStackParamList aqui

interface Review {
  id: string;
  name: string;
  text: string;
  date: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    text: 'Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.',
    date: '2 days ago',
    rating: 4,
  },
  {
    id: '2',
    name: 'Alex Morgan',
    text: 'Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.',
    date: '2 days ago',
    rating: 4,
  },
];

const products = [
  {
    id: '3',
    name: "Beard Shampoo",
    price: "$47",
    image: require('../assets/images/BeardShampoo.png'), 
  },
  {
    id: '1',
    name: "Beard Care Kit",
    price: "$150",
    image: require('../assets/images/BeardKitt.png'), 
  },
  {
    id: "2",
    name: "Shaving Foam",
    price: "$16",
    image: require('../assets/images/ShavingFoam.png'), 
  },
  {
    id: "4",
    name: "After Shave",
    price: "$25",
    image: require("../assets/images/AfterShave.png"), 
  },
];

const ProductScreenBeard: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductScreenBeard'>>(); // Defina o tipo correto para a rota
  const { id } = route.params; 

  const [product, setProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    setProduct(foundProduct || null);
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const renderReview: ListRenderItem<Review> = ({ item }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewTextContainer}>
        <CustomText style={styles.reviewName}>{item.name}</CustomText>
        <CustomText style={styles.reviewText}>{item.text}</CustomText>
        <CustomText style={styles.reviewDate}>{item.date}</CustomText>
        <CustomText style={styles.reviewRating}>
          {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
        </CustomText>
      </View>
    </View>
  );

  if (!product) {
    return <Text>Produto não encontrado.</Text>;
  }

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.image} />
          </View>

          <View style={styles.detailsContainer}>
            <CustomText style={styles.title}>{product.name}</CustomText>
            <CustomText style={styles.price}>{product.price}</CustomText>

            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
                <CustomText style={styles.buttonText}>-</CustomText>
              </TouchableOpacity>

              <CustomText style={styles.quantity}>{quantity}</CustomText>

              <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
                <CustomText style={styles.buttonText}>+</CustomText>
              </TouchableOpacity>
            </View>

            <CustomText style={styles.sectionTitle}>Shipping & Returns</CustomText>
            <CustomText style={styles.text}>Free standard shipping and free 60-day returns</CustomText>

            <CustomText style={styles.sectionTitle}>Reviews</CustomText>
            <CustomText style={styles.text}>4.5 Ratings</CustomText>
            <CustomText style={styles.text}>213 Reviews</CustomText>
          </View>
        </View>
      }
      data={reviews}
      renderItem={renderReview}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      ListFooterComponent={
        <TouchableOpacity style={styles.addToBagButton}>
           <CustomText style={styles.priceText}>{product.price}</CustomText>
          <CustomText style={styles.addToBagButtonText}>Add to Bag</CustomText>
        </TouchableOpacity>
      }
    />
  );
};

export default ProductScreenBeard;
