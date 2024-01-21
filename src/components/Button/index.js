import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

const Button = ({ title , onPress, style }) => {
    const handlePress = () =>{
        console.log('Clicked');
    };
  return (
    <TouchableOpacity 
    onPress={handlePress} 
    style={[styles.container, style]}>
      <Text style={styles.textContent}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;