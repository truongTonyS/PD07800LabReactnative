import  React  from "react";
import { Image, TouchableHighlight } from "react-native";
import { styles } from "../GoogleLogin/styles";

const GoogleLogin = () =>{
    const handleGoogleLogin = async () =>{
        console.log('test google login');
    };
    return(
        <TouchableHighlight
        activeOpacity={0.6}
        orPress={handleGoogleLogin}
        style={styles.Container}>
        <Image style={styles.image} source={require('../../assets/imga/Gmail.png')}></Image> 
        </TouchableHighlight>
    );
};

export default React.memo(GoogleLogin);