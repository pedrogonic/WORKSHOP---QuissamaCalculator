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

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }
  

  componentDidMount = () => {
    setInterval(() => {this.setState({ count: this.state.count + 1 })}, 1000);
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        fontSize: 30,
      },
      button: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 4,
        elevation: 5,
        marginTop: 10
      }
    });

    return (
      <View style={ styles.container }>
        <View style={ styles.text }>
          <Text>{this.state.count}</Text>
        </View>
      </View>
    );
  };

}


export default App;
