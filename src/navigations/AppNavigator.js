import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Description from '../screens/description';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}
