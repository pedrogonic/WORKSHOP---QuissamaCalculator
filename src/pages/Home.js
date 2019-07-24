/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';

export default class Home extends Component {

  constructor() {
    super();

    this.options = [
        {
            text: "C",
            color: "#E6E6E6"
        },
        {
            text: "(",
            color: "#E6E6E6"
        },
        {
            text: ")",
            color: "#E6E6E6"
        },
        {
            text: "×",
            color: "#ED1E79"
        },
        {
            text: "1",
            color: "transparent",
            flat: true
        },
        {
            text: "2",
            color: "transparent",
            flat: true
        },
        {
            text: "3",
            color: "transparent",
            flat: true
        },
        {
            text: "−",
            color: "#F15a24",
        },
        {
            text: "4",
            color: "transparent",
            flat: true
        },
        {
            text: "5",
            color: "transparent",
            flat: true
        },
        {
            text: "6",
            color: "transparent",
            flat: true
        },
        {
            text: "÷",
            color: "#009245",
        },
        {
            text: "7",
            color: "transparent",
            flat: true
        },
        {
            text: "8",
            color: "transparent",
            flat: true
        },
        {
            text: "9",
            color: "transparent",
            flat: true
        },
        {
            text: "+",
            color: "#FF0000",
        },
        {
            text: "0",
            color: "transparent",
            flat: true
        },
        {
            text: ".",
            color: "transparent",
            flat: true
        },
        {
            text: "=",
            color: "#39B54A",
            size: 160
        },
    ];

    this.state = {
      expression: ""
    }
  }

  incrementExpression = (v) => this.setState({ expression: this.state.expression + v });

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#EFEFEF"
      }
    });

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="rgba(0,0,0,0.15)" />
          <Card>
              <FlatList 
                columnWrapperStyle={{ justifyContent: "space-around" }}
                numColumns={ 4 }
                data={ this.options }
                keyExtractor={ (item) => item.text }
                renderItem={ ({item}) => (
                    <Button 
                        color={ item.color } 
                        text={ item.text }
                        flat={ item.flat }
                        size={ item.size }
                        onPress={ this.incrementExpression }
                    />
                ) }
              />
          </Card>
      </View>
    );
  };

}
