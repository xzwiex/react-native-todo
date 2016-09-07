/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/containers/App/App';
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const store = configureStore()


class RNativeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('RNativeApp', () => RNativeApp);