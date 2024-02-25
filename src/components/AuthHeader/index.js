import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../AuthHeader/styles';

const AuthHeader=({title, onBackPress}) =>{
    return(
        <View style={styles.container}>
         <Pressable onBackPress={onBackPress}>
            <Image
            style={styles.iconBack}
            source={require('../../assets/icon.png')}></Image>
         </Pressable>
         <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default AuthHeader;