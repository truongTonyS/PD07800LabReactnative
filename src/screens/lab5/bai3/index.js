import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';

const bai3 = () => {
 return (
    <View style={styles.container}>
      <View style={styles.header}>
       <View style={styles.imageContainer}>
        <Image source={require('../../../assets/imga/hoian.jpg')}></Image>
       </View>
       <View style={styles.authHeaderContainer}><AuthHeader />
       </View>
       <View>
       <Text style={styles.Textcontainer}>Thành Phố Hội An</Text>
       </View>
        
       </View>
      <View style={styles.body}>
         <Text style={styles.de}>Quảng Nam</Text>
         <Text style={styles.de2}>Thông tin di chuyển</Text>

        <Text>Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn,
           thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành 
           phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi,
            Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn.
            Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn.
            Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>$100/Ngày</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Đặt Ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default bai3;