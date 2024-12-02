import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text></Text>
            <Text style={styles.title}>
              <Text style={{fontWeight: 'bold'}}>Sign In</Text> To Your Account
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
            <Image style={styles.icon} source={require('./images/envelope-regular.png')}></Image>
              <TextInput style={styles.textInput} placeholder="Enter Email" />
            </View>
            <View style={styles.textInputContainer}>
            <Image style={styles.icon} source={require('./images/lock-solid.png')}></Image>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image style={styles.icon} source={require('./images/eye-regular.png')}></Image>
              </TouchableOpacity>
            </View>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>Forgot Your Password?</Text>
              </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.popTo('Home')}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <View></View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomText}>
              <Text style={styles.registerText}>Don't have an Account?</Text>
              <Text style={styles.registerTitle}>Register Now</Text>
            </View>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.bottomButtonText}>➜</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  },

  textInputContainer: {
    backgroundColor: '#333030',
    marginVertical: 15,
    borderRadius: 20,
    paddingVertical: 10,
    height: 70,
    alignItems:'center',
    flexDirection:'row'
  },

  textInput: {
    flex:1,
    fontSize: 18,
  },

  icon: {
    width: 20,
    resizeMode: 'contain',
    tintColor: 'grey',
    marginHorizontal:15,
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
