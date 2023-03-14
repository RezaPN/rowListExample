/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './navigations/AppNavigator';
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
