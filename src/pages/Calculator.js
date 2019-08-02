import React, { Component } from "react";
import { View, Text }       from "react-native";
import {
    Router,
    Scene,
    Actions,
    Modal
}                                   from "react-native-router-flux";
import { connect }                  from "react-redux";
import Selection                    from "./Selection";
import History                      from "./History";
import Home                         from "./Home";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router cardStyle={{ backgroundColor: "#FFF" }}>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene key="selection" component={ Selection } initial/>
                        <Scene key="calculator" component={ Home }/>
                        <Scene key="history" component={ History }/>
                    </Scene>
                </Router>
            </View>
        )
    }
}
