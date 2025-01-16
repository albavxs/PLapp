import React from 'react';
import { View, Image } from "react-native";
import styles from '../Styles/SplashScreenStyles';


export default function SplashScreen() {
    return (
        <View style={styles.container}>
            {/* Exibindo apenas o logo */}
            <Image source={require('src/assets/images/splash.png')}/>

        </View>
    );
}