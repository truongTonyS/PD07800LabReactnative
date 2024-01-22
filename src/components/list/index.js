import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../list/styles";

const DATA = [
  {
    id: '1',
    title: 'Cấu trúc dữ liệu',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '2',
    title: 'STL',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '3',
    title: 'Java',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '4',
    title: 'Python',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '5',
    title: 'Java',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '6',
    title: 'Java',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '7',
    title: 'Java',
    imageSource: require('../../assets/imga/rose.png'),
  },
  {
    id: '8',
    title: 'Java',
    imageSource: require('../../assets/imga/rose.png'),
  },
];

const Item = ({ title, imageSource }) => {
  return (
    <View style={styles.item}>
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const renderItem = ({ item }) => (
  <Item imageSource={item.imageSource} title={item.title} />
  
);

const ListCourse = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default React.memo(ListCourse);