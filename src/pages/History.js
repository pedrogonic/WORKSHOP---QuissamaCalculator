import React, { Component } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Text,
}                   from "react-native";
import { connect }  from "react-redux";

class History extends Component {
    render() {
        const { history } = this.props;

        return (
            <View style={ styles.container }>
                {(history.length === 0) ? (
                    <Text>Não existem dados a serem exibidos</Text>
                ) : (
                    <FlatList
                        data={ history }
                        keyExtractor={(item, index) => `${item.text}_${index}` }
                        renderItem={({ item }) => (
                            <View style={ styles.row }>
                                <Text>{ item.expression }</Text>
                                <Text>{ item.result }</Text>
                            </View>
                        )}
                    />
                )}
            </View>
        )
    }
}

const mapStateToProps = (state, props) => ({
    history: state.general.history
})

export default connect(mapStateToProps)(History);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 6,
        padding: 15,
    },

    row: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});
