import { Image, Pressable, Text, TextInput, View } from "react-native"
import { styles } from "../Input/styles";
import  React , {useState } from "react";



const Input =({labe1, placeholder, isPassword})=>{
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress =() =>{
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.labe1}>{labe1}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                secyreTextEntry={isPassword && !isPasswordVisible}
                placeholder={placeholder} 
                style={styles.input}></TextInput>
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye}
                        source={
                            isPasswordVisible
                            ? require('../../assets/eye.png')
                            : require('../../assets/eye_closed.png')

                        }></Image>
                    </Pressable>
                ) :null}
            </View>
        </View>
    );
};
export default Input;