import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { Heading, Title, Subtitle } from "../Components/Heading";
const Contact = () => {
  return (
    <View style={styles.container}>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Title>Address</Title>
        <Subtitle>Sathi Mubarak</Subtitle>
        <Subtitle>XXXXXXXXXXXXXXX</Subtitle>
        <Subtitle>Mobile: +91 9859225922</Subtitle>
        <Subtitle>Email: Pargatiexperts@gmail.com</Subtitle>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#900",
  },
  map: {
    height: 400,
    marginTop: 80,
  },
  heading: {
    textAlign: "center",
    padding: 10,
  },
  msgstyle: {
    textAlignVertical: "top",
    paddingLeft: 0,
  },
});

export default Contact;
