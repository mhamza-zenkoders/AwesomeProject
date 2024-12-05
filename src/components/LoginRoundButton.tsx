import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    onPress: () => void,
}

const LoginRoundButton:React.FC<Props> = ({onPress}) => {
    const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <TouchableOpacity
    style={styles.bottomButton}
    onPress={onPress}>
    <Icon name="arrow-forward" size={30} color="#000" />
  </TouchableOpacity>
  )
}

export default LoginRoundButton

const styles = StyleSheet.create({

    bottomButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#B1DDB8',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      bottomButtonText: {
        fontSize: 20,
        includeFontPadding: false,
      },
})