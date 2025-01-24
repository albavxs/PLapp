import React, { useState } from "react";
import { View,Text,Image,ScrollView,TouchableOpacity,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Ajuste para suas rotas
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../Styles/ShoppingCartScreenStyles";
import CustomText from "src/components/CustomText";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: any;
}

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, "ShoppingCart">;

type Props = {
  navigation: CartScreenNavigationProp;
};

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "",
      price: 8599.9,
      quantity: 1,
      image: require("../assets/images/ShampooHair.png"),
    },
    {
      id: 2,
      name: "",
      price: 959.9,
      quantity: 1,
      image: require("../assets/images/HairCareKit.png"),
    },
    {
      id: 3,
      name: "",
      price: 1002.0,
      quantity: 1,
      image: require(""),
    },
  ]);

  const handleIncrement = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <CustomText style={styles.headerTitle}>Carrinho</CustomText>
      </View>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <CustomText style={styles.itemName}>{item.name}</CustomText>
            <CustomText style={styles.itemPrice}>R$ {item.price.toFixed(2)}</CustomText>
          </View>
          <View style={styles.itemActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleDecrement(item.id)}
            >
              <Text style={styles.actionText}>-</Text>
            </TouchableOpacity>
            <CustomText style={styles.quantity}>{item.quantity}</CustomText>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleIncrement(item.id)}
            >
              <CustomText style={styles.actionText}>+</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <CustomText style={styles.totalLabel}>Total:</CustomText>
        <CustomText style={styles.totalValue}>R$ {total}</CustomText>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <CustomText style={styles.checkoutText}>Finalizar Compra</CustomText>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartScreen;
