import React, { Component } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text
}                   from "react-native";
import { Actions }  from "react-native-router-flux";

export default class Selection extends Component {
    constructor(props) {
        super(props);
    }

    openCalculator = () => Actions.calculator();
    openHistory = () => Actions.history();

    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity style={ styles.button } onPress={ this.openHistory }>
                    <Text style={ styles.text }>Histórico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress={ this.openCalculator }>
                    <Text style={ styles.text }>Calculadora</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        marginVertical: 10,
        padding: 15,
        borderRadius: 30,
        backgroundColor: "#000",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFF",
        fontSize: 26
    }
})
