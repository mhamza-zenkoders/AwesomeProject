import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types'

export default function Signup() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
          <ImageBackground
      source={require('../../images/background.jpg')}
      style={styles.background}
      blurRadius={10}
      resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text></Text>
            <Text style={styles.title}>
              <Text style={{ fontWeight: 'bold' }}>Create</Text> Your New Account
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
              <Image style={styles.icon} source={require('../../images/user-solid.png')} />
              <TextInput style={styles.textInput} placeholder="Enter Full Name" />
            </View>
            <View style={styles.textInputContainer}>
              <Image style={styles.icon} source={require('../../images/envelope-solid.png')} />
              <TextInput style={styles.textInput} placeholder="Enter Email" />
            </View>
            <View style={styles.textInputContainer}>
              <Image style={styles.icon} source={require('../../images/phone-solid.png')} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.textInputContainer}>
              <Image style={styles.icon} source={require('../../images/lock-solid.png')} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Image style={styles.icon} source={require('../../images/eye-regular.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.popTo('HomeScreen')}>
              <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomText}>
              <Text style={styles.registerText}>Already have an Account?</Text>
              <Text style={styles.registerTitle}>Login Now</Text>
            </View>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.goBack()}>
              <Text style={styles.bottomButtonText}>➜</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  titleContainer: {
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 45,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textInputContainer: {
    backgroundColor: '#333030',
    marginVertical: 15,
    borderRadius: 20,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
  icon: {
    width: 20,
    height: 25,
    resizeMode: 'contain',
    tintColor: 'grey',
    marginHorizontal: 15,
  },
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
    fontWeight:'bold'
  },
  forgotText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'right',
    marginVertical: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomText: {
    width: 300,
  },
  registerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  registerText: {
    fontSize: 20,
    color: 'white',
  },
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

});
