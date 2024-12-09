import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useAddProductMutation} from '../api/productsApi';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [addProduct, {isLoading}] = useAddProductMutation();
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleAddProduct = async () => {
    if (!title || !description || !category || !price) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    const newProduct = {
      title,
      description,
      category,
      price: parseFloat(price).toString(),
      id: Date.now().toString(),
    };

    try {
      await addProduct(newProduct).unwrap();
      Alert.alert('Success', 'Product added successfully!');

      setTitle('');
      setDescription('');
      setCategory('');
      setPrice('');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add product. Please try again.');
      console.error('Add Product Error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        placeholderTextColor={'grey'}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input,styles.descInput]}
        placeholder="Enter Description"
        placeholderTextColor={'grey'}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Category"
        placeholderTextColor={'grey'}
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        placeholderTextColor={'grey'}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Adding...' : 'Add Product'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#141414',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color:'white',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 60,
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#b1ddb8',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#222222',
    color:'white'
  },

  descInput: {
    height: 200,
    paddingTop:15,
    textAlignVertical: 'top'
  },

  button: {
    paddingVertical: 10,
    width: 200,
    backgroundColor: '#b1ddb8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
