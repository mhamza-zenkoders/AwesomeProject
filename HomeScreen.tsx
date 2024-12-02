import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>Welcome To Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 30,
  },

  titleContainer: {
   
  },

  titleBold: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#B1DDB8',
    includeFontPadding: false,
    textAlign:'center',
  },
});
