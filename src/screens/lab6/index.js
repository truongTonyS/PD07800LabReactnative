import React from "react";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";

function HomeScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const goToDetails = () => {
        navigation.navigate('Details', { name });
    };
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={name}
                onChangeText={setName}></TextInput>
            <TouchableOpacity
                style={styles.btn}
                onPress={goToDetails}
            >
                <Text style={styles.btntext}>Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

function DetailsScreen({ route, navigation }) {
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Chào bạn, ${name}`}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.btntext}>Go back Home Screen</Text>
            </TouchableOpacity>
        </View>

    );
};

//
function ArticleScreen() {
    return (
        <View style={styles.container}>
            <Text>Article Screen</Text>
        </View>
    );
};
function ChatScreen() {
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
        </View>
    );
};
function SettingScreen() {
    return (
        <View style={styles.container}>
            <Text>Setting Screen</Text>
        </View>
    );
};

//
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}
        >
            {/* Header */}
            <View style={styles.drawerheader}>
                <Image style={styles.avt} 
                source={require('../../assets/images/avt4.jpeg')} />
                <Text style={styles.headerText}>Hello</Text>
            </View>
            {/* Drawer Items */}
            <View  style={styles.draweritems}>
            <DrawerItemList {...props} />
            </View>
            {/* Footer */}
            <View style= {styles.drawerfooter}>
                <Text>Software version: 2.6.0</Text>
            </View>
        </DrawerContentScrollView>
    );
}

const Stask = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Lab6_2 = () => {
    return (
        <Drawer.Navigator drawerContent={props=><CustomDrawerContent{...props}/>} 
        screenOptions={{
            drawerActiveTintColor: "tomato",
            drawerInactiveTintColor: "gray",
          }}
        >
            <Drawer.Screen name="Home" component={HomeScreen}
                options={{ drawerIcon: () => <Image source={require('../../assets/icons/home.png')} /> }}
            />
            <Drawer.Screen name="Article" component={ArticleScreen}
                options={{ drawerIcon: () => <Image source={require('../../assets/icons/newspaper.png')} /> }}
            />
            <Drawer.Screen name="Chat" component={ChatScreen}
                options={{ drawerIcon: () => <Image source={require('../../assets/icons/chat.png')} /> }}
            />
            <Drawer.Screen name="Setting" component={SettingScreen}
                options={{ drawerIcon: () => <Image source={require('../../assets/icons/settings.png')} /> }}
            />
        </Drawer.Navigator>
    );
};
const Lab6 = () => {
    return (
        <NavigationContainer>
            <Stask.Navigator screenOptions={{ headerShown: false }} >
                <Stask.Screen name="Drawer" component={Lab6_2} />
                <Stask.Screen name="Home" component={HomeScreen} />
                <Stask.Screen name="Details" component={DetailsScreen} />
            </Stask.Navigator>
        </NavigationContainer>
    );
};
export default Lab6;
