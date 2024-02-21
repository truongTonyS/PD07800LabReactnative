import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

const ListUser = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getAPI = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const handleDelete = async (id) => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    if (result) {
      getAPI();
    }
  };

  const handleUpdate = (data) => {
    console.log('update');
  };

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getAPI();
    });
    return () => focusHandler();
  }, [navigation]);

  return (
    <ScrollView>
      <TouchableOpacity style={styles.buttonNew} onPress={() => navigation('AddUser')}>
        <Text style={styles.buttonNew}>Add New</Text>
      </TouchableOpacity>
      {data.length ? data.map((item, index) => (
        <View style={styles.containerText} key={index}>
          <View style={styles.containerText}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.birthday}>{item.birthday}</Text>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => handleUpdate(item)}>
                update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => handleDelete(item)}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )) : null}
    </ScrollView>
  );
};

export default ListUser;