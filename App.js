import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HelloComponent from "./HelloComponent";
import PlayComponent from "./PlayComponent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloComponent name={"React Native"} color={"white"} />
        <HelloComponent name={"Cambodia"} color={"black"} />
        <HelloComponent name={"You"} color={"purple"} />
        <PlayComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
