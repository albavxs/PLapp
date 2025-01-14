import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../../components/CreateScreenStyles';

const CreateAccountScreen: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  // Form submission handler
  const handleSubmit = () => {
    if (!firstname || !lastname || !email || !password || !age) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    
    // You can implement further validation and navigation here
    Alert.alert('Account Created', 'Your account has been created!');
  };

  return (
    <View style={styles.gradientContainer}>
      <TouchableOpacity style={styles.arrowButton}>
      <Image style={styles.arrowImage} source={require('../../assets/images/back-arrow.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>Create Account</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          placeholderTextColor="#20272F"
          value={firstname}
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.input}
          placeholder="Lastname"
          placeholderTextColor="#20272F"
          value={lastname}
          onChangeText={setLastname}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#20272F"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#20272F"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>How Old are you?</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={age}
            onValueChange={setAge}
          >
            <Picker.Item label="Age Range" value="" />
            <Picker.Item label="18-25" value="18-25" />
            <Picker.Item label="26-35" value="26-35" />
            <Picker.Item label="36-45" value="36-45" />
            <Picker.Item label="46+" value="46+" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccountScreen;
