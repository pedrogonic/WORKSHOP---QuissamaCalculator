/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Button from './components/Button';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      },
      text: {
        fontSize: 30,
        marginBottom: 10
    }
    });

    return (
      <View style={ styles.container }>
        <View style={ styles.text }>
          <Text>Botões</Text>
          <Button color="#750202"/>
          <Button color="#70016c"/>
          <Button color="#101b6b"/>
        </View>
      </View>
    );
  };

}


export default App;
