import React from 'react';
import Home from '../src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../src/pages/Details'

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>

        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
