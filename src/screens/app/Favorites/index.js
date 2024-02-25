import React from "react";

import { styles } from './styles';
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native";


const Favorites = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Favorites</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Favorites);