import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";

const ListUser = ({navigation}) => {
    

    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPI = async () => {
        const url = 'https://65d86e32c96fbb24c1bb8262.mockapi.io/user';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    };

    const handelDelete = async id => {
        const url = 'https://65d86e32c96fbb24c1bb8262.mockapi.io/user';
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete',
        });
        result = await result.json();
        if (result) {
            getAPI();
        }
    };

    const handleUpdate = data => {
        setOpenDialog(true);
        setSelectedUser(data);
        console.log('update')
    };

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getAPI();
        });
        return focusHandler;
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity style={styles.buttonNew}
                onPress={() => navigation.navigate('AddUser')}>

                <Text style={styles.buttonNew}>Add New</Text>
            </TouchableOpacity>
            <View>
            {
                data.length ? data.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View style={styles.cotainerText}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.birthday}>{item.birthday}</Text>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}
                                    onPress={() => handleUpdate(item.id)}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}
                                    onPress={() => handelDelete(item.id)}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )) : null}
                </View>
            <Modal visible = {openDialog} transparent={true}>
                <UpdateModel setOpenDialog={setOpenDialog}
                setSelectedUser={selectedUser}
                getAPI={getAPI}
                ></UpdateModel>
            </Modal>
       </ScrollView>
    )
}

const UpdateModel = props=>{
    const[name, setName] = useState(undefined);
    const[birthday, setBirthday] = useState(undefined);

    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name);
            setBirthday(props.selectedUser.birthday);
        }
    },[props.selectedUser]);
 const updateUser = async()=>{
    const url = 'https://65d86e32c96fbb24c1bb8262.mockapi.io/user';
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`,{
        method: 'Put',
        headers:{
            'Conyent-Type':'application/json'
        },
        body: JSON.stringify({name, birthday}),
    });
    result = await result.json();
    if (result) {
        props.getAPI();
        props.setOpenDialog(false);

    }
 };
 return(
    <View style={styles.modelContent}>
        <TextInput style={styles.input} 
        placeholder="Enter name" 
        value={name}
        onChangeText={text => setName(text)}></TextInput>
        
        <TextInput style={styles.input} 
        placeholder="Enter birthday" 
        value={birthday}
        onChangeText={text => setBirthday(text)}></TextInput> 
        
        <View style={styles.buttonGroup} >
            <TouchableOpacity style={styles.button} onPress={updateUser}>
                <Text style={styles.buttonText}>Update</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}
                 onPress={() => props.setOpenDialog(false)}>
                    Close
                 </Text>
            </TouchableOpacity>
        </View>
    </View>
 )   
};

export default ListUser;