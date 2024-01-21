import React, { useState } from 'react';
import {   Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/checkbox';
import { styles } from './styles';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';




const SignUp = () =>{
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        console.log('Test Sign in');
    };
    return(
        <View>
            <AuthHeader title ="Sign Up"></AuthHeader>
            <Input labe1="Email" placeholder="example@gmail.com" />
            <Input isPassword labe1="Password" placeholder="*******" />
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.fontText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View>

    );
};
export default SignUp;