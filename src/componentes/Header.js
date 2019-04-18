import React from 'react';
import { Component, View, Switch } from 'react-native';

export default class Header extends Component {

    this.state = {
        disponivel: true
    }


    render() {
        return (
            <View>
                <View>
                    <Switch onValueChange={() => this.setState(disponivel: !this.state.disponivel)} />
                </View>
            </View>
        );
    }

}