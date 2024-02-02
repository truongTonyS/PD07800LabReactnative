import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [screen, setScreen] = useState('main');

  const goToDetailScreen = () => {
    setScreen('detail');
  };

  const goBack = () => {
    setScreen('main');
  };

  const reset = () => {
    setName('');
  };

  const pop = () => {
    // Logic để trở lại màn hình trước đó
    // ...
  };

  const popToTop = () => {
    // Logic để trở lại màn hình chính
    // ...
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {screen === 'main' ? (
        <View>
          <Text style={{ fontSize: 24 }}>Màn hình chính</Text>
          <TextInput
            placeholder="Nhập tên của bạn"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ width: 200, height: 40, borderWidth: 1, marginTop: 10 }}
          />
          <Button title="Đi tới màn hình chi tiết" onPress={goToDetailScreen} />
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 24 }}>Màn hình chi tiết</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>Tên: {name}</Text>
          <Button title="Quay lại" onPress={goBack} />
          <Button title="Reset" onPress={reset} />
          <Button title="Pop" onPress={pop} />
          <Button title="Pop to Top" onPress={popToTop} />
        </View>
      )}
    </View>
  );
}