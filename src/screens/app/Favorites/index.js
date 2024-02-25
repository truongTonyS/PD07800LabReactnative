import React from "react";
import { ScrollView, Text } from "react-native-gesture-handler";
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

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