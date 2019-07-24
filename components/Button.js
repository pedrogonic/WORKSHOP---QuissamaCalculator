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

export default class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    onButtonPress = () => {
        this.setState({ count: this.state.count + 1 });
        this.props.onChange();
    }

    render() {
        const { color } = this.props;

        const styles = StyleSheet.create({
            button: {
                backgroundColor: "#FFF",
                padding: 10,
                borderRadius: 4,
                elevation: 5,
                marginTop: 10
            },
            text: {
                color: "#FFF"
            }
        });

        return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor: color }}
                onPress={this.onButtonPress}>
                <Text style={styles.text}>
                    Count: {this.state.count}
                </Text>
            </TouchableOpacity>
        );
    };

}
