import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const lab5 = () =>{
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="{0,0,0,0}"></StatusBar>
            <ImageBackground
            source={require('../../../assets/imga/girl.jpg')}
            style={styles.image}>
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}>Discover{'\n'}</Text>
                        <Text style={styles.secondLine}>world wtith us</Text>
                    </Text>
                    <Text style={styles.textStyle}>Discoer wold with us</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started </Text>

                    </TouchableOpacity>
                </View>
            </ImageBackground>
            
             
            </View>
    )
}
export default lab5;