import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';

type Props = {
    title: string,
    onPress: () => void,
}
const LoginButton:React.FC<Props> = ({title,onPress}) => {
    const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <TouchableOpacity
                style={styles.loginButton}
                onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
              </TouchableOpacity>
  )
}

export default LoginButton

const styles = StyleSheet.create({

    loginButton: {
        backgroundColor: '#B1DDB8',
        padding: 20,
        borderRadius: 20,
        height: 70,
        marginVertical: 15,
      },
    
      buttonText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
      },
})