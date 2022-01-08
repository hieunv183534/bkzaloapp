import React, {useContext, useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import LogInImage from './assets/logIn.png';
import AvatarImage1 from './assets/avatar1.png';
import LogInImage3 from './assets/logIn3.png';
import {color, onChange} from 'react-native-reanimated';
import {Feather} from 'react-native-vector-icons/Feather';

const CaiDat = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat4.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Quyền riêng tư</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat5.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Tài khoản và bảo mật</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat6.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Sao lưu và khôi phục</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat7.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Giao diện</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat8.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Thông báo</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat9.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Tin nhắn</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat10.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Cuộc gọi</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat11.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Quản lý dữ liệu và bộ nhớ</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat12.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Nhật ký và khoảnh khắc</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat13.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Danh bạ</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat14.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Ngôn ngữ và phông chữ</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat15.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Thông tin về Zalo</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat16.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Chuyển tài khoản</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DangXuat')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 0,
            }}>
            <Image
              style={stylesCaiDat.image}
              source={require('./assets/caiDat17.png')}
            />
            <View style={stylesCaiDat.box}>
              <Text style={stylesCaiDat.text}>Đăng xuất</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CaiDat;

const stylesCaiDat = StyleSheet.create({
  container: {
    width: 500,
  },
  box: {
    width: 400,
    backgroundColor: 'white',
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 400,
  },
  text: {
    color: 'black',
    marginTop: 15,
  },
  image: {
    height: 50,
    width: 50,
  },
});

const stylesSearchBar = StyleSheet.create({
  container: {
    width: 500,
    backgroundColor: '#01BBFA',
  },
  input: {
    width: 265,
    backgroundColor: '#09ACFB',
    color: 'white',
  },
  image: {
    height: 50,
    width: 50,
  },
});
