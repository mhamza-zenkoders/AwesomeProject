import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../redux/store';
import reducer, {increment, decrement, incrementByAmount} from '../redux/features/CounterSlice'
const CounterScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COUNTER</Text>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style= {styles.button} onPress={()=>dispatch(increment())}>
      <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={()=>dispatch(decrement())}>
      <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={()=>dispatch(incrementByAmount(4))}>
      <Text style={styles.buttonText}>Increment By 4</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 70,
    fontWeight:900,
    color:'white',
  },
  count: {
    fontSize: 70,
    padding: 30,
    color:'white',
  },

  button:{
    backgroundColor:'#b1ddb8',
    padding:20,
    marginVertical:20,
    borderRadius:20,
    width:280,
    alignItems:'center'
  },

  buttonText:{
    color:'black',
    fontWeight: 900,
    fontSize:25
  }
});
