// screens/SplashScreen.tsx
import React from 'react';
import { View, Image } from "react-native";
import  styles  from '../../components/SplashScreenStyles'


export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Exibindo apenas o logo */}
      <Image style={styles.splashImage} source={require('../../assets/images/Splash.png')} />
    </View>
  );
}
