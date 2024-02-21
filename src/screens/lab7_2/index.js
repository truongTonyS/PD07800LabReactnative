import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { styles } from "./styles";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
function LoveScreen() {
  return (
    <View style={styles.screen}>
      <Text>YÊU THÍCH</Text>
    </View>
  );
};
function PopularScreen() {
  return (
    <View style={styles.screen}>
      <Text>PHỔ BIẾN</Text>
    </View>
  );
};
function LiveScreen() {
  return (
    <View style={styles.screen}>
      <Text>TRỰC TIẾP</Text>
    </View>
  );
};


const Tab = createMaterialTopTabNavigator();

const Lab7_2 = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6C22',
        tabBarStyle:{paddingTop: 45},
      }}>
        <Tab.Screen name="Yêu thích" component={LoveScreen} />
        <Tab.Screen name="Phổ biến" component={PopularScreen} />
        <Tab.Screen name="Trực tiếp" component={LiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Lab7_2;