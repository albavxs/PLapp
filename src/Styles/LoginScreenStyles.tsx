import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#F4F4F4",
    position:"relative",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
   backgroundColor:"#F4F4F4",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#7C4DFF",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  linksContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  linkText: {
    color: "#F4F4F4",
  },
  link: {
    color: "#7C4DFF",
    fontWeight: "bold",
  },
  socialButtons: {
    width: "100%",
    marginTop: 20,
  },
  socialButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor:"#F4F4F4",
    borderRadius: 20,
    flexDirection: "row", // Adicionado para alinhar o ícone e o texto horizontalmente
    alignItems: "center",  // Garantir que o ícone e o texto fiquem alinhados
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#333",
    marginLeft: 10, // Adicionado para dar espaço entre o ícone e o texto
  },
});

export default styles;
