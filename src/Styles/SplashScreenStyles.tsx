import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  splashImage: {
    width: 250, // Ajuste a largura conforme necessário
    height: 250, // Ajuste a altura conforme necessário
    resizeMode: 'contain', // Mantém a proporção da imagem sem distorcer
  },
});

export default styles;