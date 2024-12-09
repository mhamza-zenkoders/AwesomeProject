import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/features/AuthSlice';
import HomeMenuButtons from '../components/HomeMenuButtons';

export default function HomeScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <HomeMenuButtons
          title="Tasks"
          onPress={() => navigation.navigate('ToDoHomeScreen')}
          imageSrc={require('../../images/to-do-list.png')}
        />
        <HomeMenuButtons
          title="Notes"
          onPress={() => navigation.navigate('NotesHomeScreen')}
          imageSrc={require('../../images/notes.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <HomeMenuButtons
          title="StopWatch"
          onPress={() => navigation.navigate('Stopwatch')}
          imageSrc={require('../../images/stopwatch.png')}
        />
        <HomeMenuButtons
          title="Calculator"
          onPress={() => navigation.navigate('Calculator')}
          imageSrc={require('../../images/calculator.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <HomeMenuButtons
          title="Counter"
          onPress={() => navigation.navigate('Counter')}
          imageSrc={require('../../images/counter.png')}
        />
        <HomeMenuButtons
          title="Products"
          onPress={() => navigation.navigate('Products')}
          imageSrc={require('../../images/counter.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => dispatch(logout())}>
          <Text style={styles.buttonText}>Lougout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },

  titleContainer: {},

  titleBold: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#B1DDB8',
    includeFontPadding: false,
    textAlign: 'center',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    backgroundColor: '#b1ddb8',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
