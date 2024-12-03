import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';
import {Text} from '@react-navigation/elements';

export const AddNoteButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('EditNote', {noteId: undefined});
      }}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#b1ddb8',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
