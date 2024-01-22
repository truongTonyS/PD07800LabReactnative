import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { style } from './styles';

const ViewComponent = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={style.container}>
      <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhập họ tên"
        style={style.tipStyle}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        style={style.tipStyle}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu"
        secureTextEntry={true}
        style={style.tipStyle}
      />
    </View>

      {/* Line1 */}
      <View></View>
      <Text style={style.baseText}>
        Em vào đời bằng{' '}
        <Text style={[style.boldText, { color: 'red' }]}>vang đỏ</Text>{' '}
        anh vào đời bằng{' '}
        <Text style={[style.boldText, { color: 'yellow' }]}>nước trà</Text>
      </Text>
      {/* Line2 */}
      <Text style={style.baseText}>
        Bằng cơn mưa thơm{' '}
        <Text style={[style.boldText, { fontSize: 20 }, style.italicText]}>
          mùi đất{' '}
        </Text>{' '}
        và{' '}
        <Text style={[{ fontSize: 10 }, style.italicText]}>
          bằng hoa dịa mọc trước nhà
        </Text>
      </Text>
      {/* Line3 */}
      <Text
        style={[
          style.baseText,
          style.italicText,
          style.boldText,
          { color: 'gray' },
        ]}
      >
        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>
      {/* Line4 */}
      <Text style={[style.baseText]}>
        Lý trí em là{' '}
        <Text
          style={{
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          }}
        >
          {' '}
          công cụ{' '}
        </Text>
        còn trái tim anh là
        <Text
          style={{
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          }}
        >
          {' '}
          động cơ{' '}
        </Text>
      </Text>
      {/* Line5 */}
      <Text style={[style.baseText, { textAlign: 'right' }]}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
      </Text>
      {/* Line6 */}
      <Text
        style={[
          style.baseText,
          {
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'orange',
          },
        ]}
      >
        Anh chỉ muốn chân mình đạp đất không muốn chân ai dưới chân mình
      </Text>
      {/* Line7 */}
      <Text
        style={[
          style.baseText,
          {
            fontWeight: 'bold',
            color: 'black',
          },
        ]}
      >
        Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text>
        Em vào đời bằng <Text style={colorText('yellow')}>mây trắng</Text>
      </Text>
      {/* Line8 */}
      <Text
        style={[
          style.baseText,
          {
            fontWeight: 'bold',
            color: 'black',
          },
        ]}
      >
        Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text>
        và con đường đó giờ <Text style={colorText('white')}>vắng anh</Text>
      </Text>
    </View>
   
    );
};

export default ViewComponent;

const colorText = (color) => {
  return {
    color: color,
  };
};