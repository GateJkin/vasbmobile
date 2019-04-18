import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from './componentes/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
