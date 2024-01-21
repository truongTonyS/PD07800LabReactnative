import  React, { useState }  from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "../checkbox/styles";

const Checkbox = ({checked, onCheck}) =>{
    return (
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => onCheck(!checked)}
        style={styles.container}>
            {checked ?(
                <View style ={styles.innerContainer}>
                    <Image
                    style={styles.checkIcon}
                    source={require('../../assets/imga/Check.png')}></Image>
                </View>
            ) : null}
        </TouchableOpacity>
    );
};
export default React.memo(Checkbox);