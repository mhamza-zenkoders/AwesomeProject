import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../types';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/AuthSlice';

export default function HomeScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.menuBox} onPress={()=>(navigation.navigate('Calculator'))}>
          <Image
            style={styles.menuIcon}
            source={require('../../images/calculator.png')}></Image>

          <Text style={styles.menuBoxText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBox} onPress={()=>(navigation.navigate('ToDoHomeScreen'))}>
          <Image
            style={styles.menuIcon}
            source={require('../../images/to-do-list.png')}></Image>

          <Text style={styles.menuBoxText}>To Do List</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.menuBox} onPress={()=>(navigation.navigate('NotesHomeScreen'))}>
          <Image
            style={styles.menuIcon}
            source={require('../../images/notes.png')}></Image>
          <Text style={styles.menuBoxText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBox} onPress={()=>(navigation.navigate('Stopwatch'))}>
          <Image
            style={styles.menuIcon}
            source={require('../../images/stopwatch.png')}></Image>
          <Text style={styles.menuBoxText}>Stopwatch</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.menuBox} onPress={()=>(navigation.navigate('Counter'))}>
          <Image
            style={styles.menuIcon}
            source={require('../../images/counter.png')}></Image>
          <Text style={styles.menuBoxText}>Counter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={()=>(dispatch(logout()))}>
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
    backgroundColor: '#000',
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

  menuBox: {
    aspectRatio: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuBoxText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

  menuIcon: {
    width: 120,
    height: 120,
    marginVertical:20
  },

  buttonContainer:{
    flex:1,
    justifyContent:'flex-end',
  },

  logoutButton:{
    justifyContent:'center',
    alignItems: 'center', 
    width:200,
    backgroundColor:'#b1ddb8',
    paddingHorizontal:30,
    paddingVertical:20,
    borderRadius:20
  },

  buttonText:{
    fontSize:18,
    fontWeight:'bold'
}
});
