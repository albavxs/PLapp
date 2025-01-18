import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F4F4F4',
    marginTop:-150,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#F4F4F4",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    marginBottom: 30,
  },
  dropdownText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    padding: 15,
    marginTop: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
