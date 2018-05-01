import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const HelloComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, { color: props.color }]}>
        Hello! I Love {props.name}.
      </Text>
    </View>
  );
};

//Get Screen Width
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: "#00c0ef",
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 18,
    padding: 20
  }
});

export default HelloComponent;
