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

const SignUpScreen2 = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={{backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={stylesSignUp2.text1}>
        Đã tồn tại 1 tài khoản Zalo được gắn với số điện thoại (+84) 347
      </Text>
      <Text style={stylesSignUp2.text11}>254 159</Text>
      <Image style={stylesSignUp2.image} source={AvatarImage1} />
      <Text style={stylesSignUp2.text2}>Lê Long</Text>
      <Text style={stylesSignUp2.text3}>(+84) 347 254 159</Text>
      <Text style={stylesSignUp2.text4}>Nếu Lê Công là tài khoản của bạn</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen2')}>
        <Text style={stylesSignUp2.text5}>đăng nhập tại đây</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={stylesSignUp2.button}>DÙNG SỐ ĐIỆN THOẠI KHÁC</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen2;

const stylesSignUp2 = StyleSheet.create({
  container: {
    // flex:1,
    // backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center',
  },
  text1: {
    color: 'black',
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    marginTop: 30,
  },
  text11: {
    color: 'black',
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  image: {
    width: 40,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  text2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    marginTop: 10,
  },
  text3: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
  },
  text4: {
    color: 'black',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    marginTop: 20,
  },
  text5: {
    color: '#1e90ff',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#1e90ff',
    color: 'white',
    marginTop: 300,
    padding: 10,
    // fontWeight:'bold',
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',

    borderRadius: 40,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});
