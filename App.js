import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons"; // Font Awesome Icons

// import plus from "./assets/plus.png"; // Plus...
import tori_icon from "./assets/tori_icon.png";
import profile_icon from "./assets/profile_icon.png";
import dojo_icon from "./assets/dojo_icon.png";
import feed_icon from "./assets/feed_icon.png";
import calendar_icon from "./assets/calendar_icon.png";

const Tab = createBottomTabNavigator();

export default function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconStyle = focused
              ? { width: 25, height: 25, tintColor: "red" } // Icon color is red when focused
              : { width: 25, height: 25, tintColor: "#899499" };

            if (route.name === "Dojo") {
              iconName = dojo_icon;
            } else if (route.name === "Feed") {
              iconName = feed_icon;
            } else if (route.name === "Calendar") {
              iconName = calendar_icon;
            } else if (route.name === "Profile") {
              iconName = profile_icon;
            } else if (route.name === "ActionButton") {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      backgroundColor: "red",
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: Platform.OS === "android" ? 70 : 50,
                    }}
                  >
                    <Image
                      source={tori_icon}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: "white",
                      }}
                    ></Image>
                  </View>
                </TouchableOpacity>
              );
            }
            // Return custom icons
            return <Image source={iconName} style={iconStyle} />;
            // You can return any component that you like here!
            // return (
            //   <FontAwesome5
            //     name={iconName}
            //     size={size}
            //     color={focused ? "red" : "gray"}
            //   />
            // );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            height: 80,
            borderRadius: 40,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 15,
            paddingVertical: 20,
          },
        })}
      >
        <Tab.Screen name="Dojo" component={DojoScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="ActionButton" component={ToriScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

      {/* <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 98,
          left: 50,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View> */}
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80; // Horizontal Padding = 20...
  return width / 5; // Total five Tabs...
}

function ToriScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
    </View>
  );
}

function DojoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dojo</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Calendar</Text>
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
