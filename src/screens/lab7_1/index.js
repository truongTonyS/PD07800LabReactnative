import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";

function HomeScreen() {
    return (
        <View style={styles.screen}>
            <Text>HomeScreen</Text>
        </View>
    );
};
function SettingScreen() {
    return (
        <View style={styles.screen}>
            <Text>SettingScreen</Text>
        </View>
    );
};
function PhoneScreen() {
    return (
        <View style={styles.screen}>
            <Text>PhoneScreen</Text>
        </View>
    );
};

const renderLabel = (props) => props.focused ? (
    <Text style={{color:'#FF6C22'}}>{props.children}</Text>
) : null;

const renderIcon = (icon, props) => (
    <Image source={icon} tintColor={ props.color} style={styles.img}/>
  );
const Tab = createBottomTabNavigator();
const Lab7_1 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#FF6C22',
                    tabBarLabelStyle: { flexDirection: 'row' },
                }}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: props=> renderIcon(require('../../../assets/icons/home.png'), props),
                        tabBarLabel: props => renderLabel(props),
                    }} />
                <Tab.Screen name="Phone" component={PhoneScreen}
                    options={{
                        tabBarIcon: props=> renderIcon(require('../../../assets/icons/phone.png'), props),
                        tabBarLabel: props => renderLabel(props),
                    }} />
                <Tab.Screen name="Setting" component={SettingScreen} 
                options={{
                    tabBarIcon: props=> renderIcon(require('../../../assets/icons/settings.png'), props),
                    tabBarLabel: props => renderLabel(props),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Lab7_1;