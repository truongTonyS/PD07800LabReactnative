import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Button from "../../../components/Button/"


const Splash = ({navigation}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require("../../../assets/imga/10050.png")}
      />
      <View>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button 
      onPress={() => navigation.navigate('SignUp')}
      title={"Sign Up"} />
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;