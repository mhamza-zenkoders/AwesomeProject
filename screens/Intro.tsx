import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenNavigationProp} from '../types'

export default function Intro() {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
      resizeMode="cover">
      <LinearGradient
        colors={['transparent', 'black']}
        style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.titleBold}>My App</Text>
          <Text style={styles.subtitle}>Dream big. Start Small. Act Now</Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.popTo('Login')}>
              <Text style={styles.buttonText}>Continue</Text>
              <Image
                source={require('../images/rightarrow.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  title: {
    color: '#fff',
    fontSize: 35,
    includeFontPadding: false,
  },

  titleBold: {
    fontWeight: 'bold',
    color: '#B1DDB8',
    fontSize: 50,
    includeFontPadding: false,
    marginBottom: 20,
  },

  subtitle: {
    color: '#fff',
    fontSize: 20,
    includeFontPadding: false,
  },

  button: {
    backgroundColor: '#B1DDB8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    borderRadius: 15,
    marginVertical: 40,
  },

  arrowIcon: {
    width: 50,
    height: 30,
  },

  buttonText: {
    fontSize: 18,
    paddingRight: 10,
    fontWeight:'bold',
  },
});
