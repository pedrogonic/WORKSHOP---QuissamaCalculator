/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry}        from 'react-native';
import Calculator           from './src/pages/Calculator';
import {name as appName}    from './app.json';

// Redux
import { Provider }         from 'react-redux';
import { PersistGate }      from 'redux-persist/integration/react'
import { persistor, store } from './src/reducers/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
              <PersistGate loading={ null } persistor={ persistor }>
                  <Calculator />
              </PersistGate>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
