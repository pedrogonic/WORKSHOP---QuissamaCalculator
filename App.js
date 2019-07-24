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

    this.state = {
      total: 0
    }
  }

  incrementTotal = () => this.setState({ total: this.state.total + 1 });

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
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Botões: {this.state.total}</Text>
          <Button color="#750202" onChange={ this.incrementTotal }/>
          <Button color="#70016c" onChange={ this.incrementTotal }/>
          <Button color="#101b6b" onChange={ this.incrementTotal }/>
        </View>
      </View>
    );
  };

}


export default App;
