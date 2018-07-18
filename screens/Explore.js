import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Category from "./components/Explore/Category";
import Homes from "./components/Explore/Homes";
import Tag from "./components/Explore/Tag";

const { width } = Dimensions.get("window");
class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    console.log("form second branch");
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>

            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: 10
              }}
            >
              <Tag name="Guests" />
              <Tag name="Tags" />
            </Animated.View>
          </Animated.View>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Niko?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../assets/home.jpg")}
                    name="Home"
                  />
                  <Category
                    imageUri={require("../assets/experiences.jpg")}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require("../assets/restaurant.jpg")}
                    name="Restaurant"
                  />
                </ScrollView>
              </View>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                Introducing Airbnb Plus
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                A new selection of homes verified for quality & comfort
              </Text>

              <View
                style={{
                  width: width - 40,
                  height: 200,
                  marginTop: 20,
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dddddd"
                  }}
                  source={require("../assets/home.jpg")}
                />
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Home around the world
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Homes
                  width={width}
                  type="PRIVATE APARTMENT"
                  name="The cozy studio"
                  price="82"
                />
                <Homes
                  width={width}
                  type="PRIVATE APARTMENT"
                  name="The cozy studio"
                  price="82"
                />
                <Homes
                  width={width}
                  type="PRIVATE APARTMENT"
                  name="The cozy studio"
                  price="82"
                />
                <Homes
                  width={width}
                  type="PRIVATE APARTMENT"
                  name="The cozy studio"
                  price="82"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({});
