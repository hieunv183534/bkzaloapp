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

const LoginScreen3 = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={stylesLogIn3.text1}>Tạo mật khẩu mới</Text>
      <Image style={stylesLogIn3.logInImage2} source={LogInImage3} />
      <TouchableOpacity>
        <Text style={stylesLogIn3.button}>ĐỔI MẬT KHẨU</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen4')}>
        <Text style={stylesLogIn3.text2}>Để sau</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen3;

const stylesLogIn3 = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: 'white',
    // alignItems:'center',
    // justifyContent:'center',
  },
  text1: {
    backgroundColor: '#1e90ff',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
  button: {
    backgroundColor: '#1e90ff',
    color: 'white',
    marginTop: 10,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',
    borderRadius: 40,
    marginLeft: 120,
    marginRight: 120,
  },
  text2: {
    marginTop: 20,
    color: '#1e90ff',
    fontSize: 14,
    textAlign: 'center',
  },
  logInImage2: {
    height: 200,
    width: 410,
    alignItems: 'center',
    marginVertical: 10,
  },
});
