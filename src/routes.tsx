import React from 'react';
import Home from '../src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>

        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
