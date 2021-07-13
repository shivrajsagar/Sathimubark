import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const Heading = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const Subtitle = ({ children }) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    color: "#3366ff",
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    // fontFamily: 'Ubuntu-Regular',
  },
  title: {
    fontSize: 25,
    padding: 10,
    fontWeight: "500",
    justifyContent: "center",

    //fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    fontSize: 14,
    padding: 10,
    textAlign: "justify",
    fontWeight: "600",
    //fontFamily: 'Ubuntu-Regular',
  },
});

export { Heading, Title, Subtitle };
