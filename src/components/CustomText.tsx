import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Alata-Regular", // Certifique-se de que a fonte foi carregada no App
  },
});

export default CustomText;
