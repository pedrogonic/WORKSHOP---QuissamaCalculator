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
            expression: "",
            result: ""
        }
    }

    incrementExpression = (v) => {
        const { expression, result } = this.state;

        if (v === "=")
            return this.getResult();

        return this.setState({ 
            expression: v === 'C' ? '' : this.state.expression + v,
            result: v === 'C' ? '' : result
        })
    };

    getResult = () => {
        let { expression } = this.state;
        expression = expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/\+/g, "%2B").replace(/−/g, "-");

        this.setState({ result: "Calculando..." });

        fetch(`https://api.mathjs.org/v4/?expr=${expression}`).then(r => r.json()).then(res => {
            this.setState({ result: res });
        }).catch((error) => {
            this.setState({ result: "Expressão inválida!" });
        });
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: "#EFEFEF"
            },
            header: {
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-end",
                padding: 40
            },
            expression: {
                fontSize: 27,
                color: "rgba(75, 75, 75, 0.85)"
            },
            result: {
                color: "#2C2C2C",
                fontSize: 35,
                fontWeight: "600",
                marginTop: 8
            }
        });

        const { expression, result } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="rgba(0,0,0,0.15)" barStyle="dark-content"/>
                <View style={ styles.header }>
                    <Text style={ styles.expression }>
                        { expression }
                    </Text>
                    <Text style={ styles.expression }>
                        { result }
                    </Text>
                </View>
                <Card>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: "space-around" }}
                        numColumns={4}
                        data={this.options}
                        keyExtractor={(item) => item.text}
                        renderItem={({ item }) => (
                            <Button
                                color={item.color}
                                text={item.text}
                                flat={item.flat}
                                size={item.size}
                                onPress={this.incrementExpression}
                            />
                        )}
                    />
                </Card>
            </View>
        );
    };

}
