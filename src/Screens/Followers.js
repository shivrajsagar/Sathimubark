import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Dimensions,
  Linking,
} from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("screen");

class Followers extends Component {
  state = {
    UserList: [],
    loading: true,
    message: "",
  };

  async componentDidMount() {
    const { loading } = this.state;
    const user_id = await AsyncStorage.getItem("user_id");
    try {
      const pokemonApiCall = await fetch(
        `http://sathimubark.com/api/wedding/read/read_follower.php?recieverid=${user_id}`
      );
      if (pokemonApiCall.records) {
        this.setState({ loading: true });
      } else {
        const AllUserList = await pokemonApiCall.json();

        this.setState({
          UserList: AllUserList.records,
          loading: false,
          message: AllUserList.message,
        });
      }
    } catch (err) {
      console.log("Error fetching Chat", err);
    }
  }

  openwhatsapplink = (item) => {
    const number = "+91" + item.number;
    const url = `whatsapp://send?phone=${number}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Alert", "WhatsApp is not installed");
      }
    });
  };
  render() {
    const { UserList, message } = this.state;
    return (
      <ScrollView>
        {message != null ? (
          <>
            <Text style={{ marginTop: 20, textAlign: "center", fontSize: 25 }}>
              {message}
            </Text>
          </>
        ) : (
          <>
            {UserList.map((item, index) => {
              return (
                <View style={styles.container} key={index.toString()}>
                  <View style={styles.view1}>
                    {isNaN(item.image) ? (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `http://sathimubark.com/api/wedding/uploads/userimage/${item.proflePicUrl}`,
                        }}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                        }}
                      />
                    )}

                    <Text style={styles.text}>{item.userName}</Text>
                    <Button
                      title="Follow"
                      buttonStyle={styles.button}
                      onPress={() => Alert.alert("Follow")}
                    />
                  </View>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "#900",
    padding: 5,
    marginLeft: 5,
    margin: 5,
    borderRadius: 5,
  },
  view1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#ffee",
  },
  text: {
    fontSize: 20,
    padding: 5,
    color: "#fff",
    marginLeft: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "orange",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: 5,
  },
});

export default Followers;
