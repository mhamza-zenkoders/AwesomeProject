import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';

import {Provider, useSelector} from 'react-redux';
import {store, RootState, persistor} from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import Intro from './src/screens/Intro';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Products from './src/screens/Products';
import {RootStackParamList} from './types';
import {Stopwatch} from './src/screens/Stopwatch';
import {Calculator} from './src/screens/Calculator';
import {NotesHomeScreen} from './takenotes/screens/NotesHomeScreen';
import {EditNoteScreen} from './takenotes/screens/EditNoteScreen';
import {ToDoHomeScreen} from './ToDoList/ToDoHomeScreen';
import {AddNoteButton} from './takenotes/components/AddNoteButton';
import CounterScreen from './src/screens/CounterScreen';
import {PersistGate} from 'redux-persist/integration/react';
import AddProduct from './src/screens/AddProduct';

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootStack() {
  const {userData} = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator
      // initialRouteName='NotesHomeScreen'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#222222',
        },
      }}>
      {!userData ? (
        <>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerTitle: 'Home',
              headerTitleStyle: styles.headerTitle,
            }}
          />
          <Stack.Screen
            name="Counter"
            component={CounterScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Stopwatch"
            component={Stopwatch}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Calculator"
            component={Calculator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Products"
            component={Products}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NotesHomeScreen"
            component={NotesHomeScreen}
            options={{
              headerTitle: 'All Notes',
              headerTitleStyle: styles.headerTitle,
              // headerRight: () => <AddNoteButton />,
            }}
          />
          <Stack.Screen name="EditNote" component={EditNoteScreen} />
          <Stack.Screen
            name="ToDoHomeScreen"
            component={ToDoHomeScreen}
            options={{
              headerTitle: 'All Tasks',
              headerTitleStyle: styles.headerTitle,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: 'white',
    fontSize: 25,
  },
});
