import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from '../api/productsApi';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';
import Icon from 'react-native-vector-icons/FontAwesome';

const Products: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  // Get products from the API
  const {data, error, isLoading} = useGetProductsQuery('');
  // Initialize the delete mutation
  const [deleteProduct, {isLoading: isDeleting}] = useDeleteProductMutation();

  // Handle delete action
  const handleDelete = (productId: string) => {
    deleteProduct(productId); // Delete the product by its ID
    
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          An error occurred: {JSON.stringify(error, null, 2)}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.category}>Category: {item.category}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
              disabled={isDeleting}>
              <Icon name="trash-o" size={25} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>No products available.</Text>}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddProduct')}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#222222',
    width: '100%',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'space-between',
  },
  cardTextContainer: {
    gap:15
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
  },
  description:{
    color:'white',
  },
  category: {
    fontStyle: 'italic',
    color:'white',
  },
  price: {
    fontWeight: 'bold',
    color: '#28a745',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },

  button: {
    paddingVertical: 10,
    width: 200,
    backgroundColor: '#b1ddb8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  deleteButton: {
    marginTop: 10,
    paddingVertical: 8,

    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
