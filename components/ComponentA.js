//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Query from "./myQuery.gql"; // absolute path will work. ex: C:\Project\importGQL\components\myQuery.gql

// create a component
class ComponentA extends Component {
  render() {
    // console.log("XXX", XXX);
    return (
      <View style={styles.container}>
        <Text>ComponentA</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default ComponentA;
