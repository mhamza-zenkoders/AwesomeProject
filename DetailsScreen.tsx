
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

export default function DetailsScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button onPress={() => navigation.push('Details')}>
          Go to Details... again
        </Button>
        <Button onPress={() => navigation.goBack()}>Go back</Button>
        <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
        <Button onPress={() => navigation.popToTop()}>
          Go back to first screen in stack
        </Button>
      </View>
    );
  }
  
  