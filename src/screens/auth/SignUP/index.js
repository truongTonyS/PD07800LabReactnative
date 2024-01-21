import React, { useState } from 'react';
import {   Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/checkbox';
import { styles } from './styles';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';




const SignUp = () =>{
    const [checked, setChecked] = useState(false);
    return(
        <View>
            <AuthHeader title ="Sign Up"></AuthHeader>
            <Input labe1="Name" placeholder="Exampke Jonh" />
            <Input labe1="Email" placeholder="example@gmail.com" />
            <Input isPassword labe1="Password" placeholder="*******" />
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign Up"></Button>
            <Seperator text="Or sign up with"></Seperator>
        </View>

    );
};
export default SignUp;