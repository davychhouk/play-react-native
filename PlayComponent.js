import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

class PlayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Don't Click Me! Or I'll angry", color: "#00c0ef" };
  }

  _changeColor() {
    this.setState({ text: "I'm Angry Now!", color: "red" });
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: this.state.color }]}
        onPress={this._changeColor.bind(this)}
      >
        <Text style={styles.textStyle}>{this.state.text}</Text>
      </TouchableOpacity>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    fontSize: 18,
    padding: 20
  }
});

export default PlayComponent;
