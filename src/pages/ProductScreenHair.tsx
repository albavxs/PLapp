import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import styles from '../Styles/ProductScreenHairStyles';

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

const ProductScreen = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const renderReview: ListRenderItem<Review> = ({ item }) => (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewName}>{item.name}</Text>
                <Text style={styles.reviewText}>{item.text}</Text>
                <Text style={styles.reviewDate}>{item.date}</Text>
                <Text style={styles.reviewRating}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/ShampCabelo.png')}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>Men's Harrington Jacket</Text>
                        <Text style={styles.price}>$148</Text>

                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.quantity}>{quantity}</Text>

                            <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.sectionTitle}>Shipping & Returns</Text>
                        <Text style={styles.text}>Free standard shipping and free 60-day returns</Text>

                        <Text style={styles.sectionTitle}>Reviews</Text>
                        <Text style={styles.text}>4.5 Ratings</Text>
                        <Text style={styles.text}>213 Reviews</Text>
                    </View>
                </View>
            }
            data={reviews}
            renderItem={renderReview}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            ListFooterComponent={
                <TouchableOpacity style={styles.addToBagButton}>
                    <Text style={styles.addToBagButtonText}>Add to Bag</Text>
                </TouchableOpacity>
            }
        />
    );
};

export default ProductScreen;
