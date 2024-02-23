import React, { useState } from "react";
import { TextInput,Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const AddUser = () => {
    const [name, setName] =useState('');
    const [birthday, setBirthday] = useState('');
     const saveData = async()=>{
        const url = 'https://65d86e32c96fbb24c1bb8262.mockapi.io/user';
        let result = await fetch(url,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name, birthday}),
        });
        result = await result.json();
        if (result) {
            console.warn("Add sucess");
        }
     }

    return(
        <View style={styles.modelContent}>
            <TextInput style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={text => setName(text)}>
            </TextInput>

            <TextInput style={styles.input}
            placeholder="Enter birthday"
            value={birthday}
            onChangeText={text => setBirthday(text)}>
            </TextInput>

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={saveData}>
                    <Text style={styles.buttonText}>Add new</Text>
                </TouchableOpacity>
            </View>
       </View>
    )
}

export default AddUser;