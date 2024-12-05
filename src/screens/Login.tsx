import React, {useState, useEffect} from 'react';
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
  ImageBackground,
} from 'react-native';
import LoginButton from '../components/LoginButton';

import LoginRoundButton from '../components/LoginRoundButton';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/features/AuthSlice';
import {AppDispatch} from '../redux/store';
import {RootState} from '../redux/store';
import {clearError} from '../redux/features/AuthSlice';

export default function Login() {
  const {isError, errorMessage} = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<ScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    dispatch(clearError());
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    dispatch(clearError());
  };
  const handleLogin = () => {
    const params = {
      username: email,
      password: password,
    };
    dispatch(login(params));
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
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
                <Text style={{fontWeight: 'bold'}}>Sign In</Text> To Your
                Account
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.textInputContainer}>
                <Image
                  style={styles.icon}
                  source={require('../../images/envelope-regular.png')}></Image>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={handleEmailChange}
                  placeholder="Enter Email"
                />
              </View>
              <View style={styles.textInputContainer}>
                <Image
                  style={styles.icon}
                  source={require('../../images/lock-solid.png')}></Image>
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChangeText={handlePasswordChange}
                  placeholder="Enter Password"
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Image
                    style={styles.icon}
                    source={require('../../images/eye-regular.png')}></Image>
                </TouchableOpacity>
              </View>
              {isError && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Your Password?</Text>
              </TouchableOpacity>
              <LoginButton title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.bottomText}>
                <Text style={styles.registerText}>Don't have an Account?</Text>
                <Text style={styles.registerTitle}>Register Now</Text>
              </View>
              <LoginRoundButton onPress={() => navigation.navigate('Signup')} />
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
  },

  textInputContainer: {
    backgroundColor: '#333030',
    marginVertical: 15,
    borderRadius: 20,
    paddingVertical: 10,
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'white',
  },

  icon: {
    width: 20,
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
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
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
});
