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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={{backgroundColor: 'white'}}>
      <Image style={stylesLogIn.logInImage} source={LogInImage} />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen2')}>
        <Text style={stylesLogIn.logInButton}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={SignUpScreen}>
        <Text style={stylesLogIn.signInButton}>ĐĂNG KÝ</Text>
      </TouchableOpacity> */}
      <Text style={stylesLogIn.language}>Tiếng Việt English စမာစာ</Text>
    </View>
  );
};

export default LoginScreen;

const stylesLogIn = StyleSheet.create({
  logInImage: {
    width: 400,
    height: 450,
  },
  logInButton: {
    backgroundColor: '#1e90ff',
    color: 'white',
    marginTop: 10,
    padding: 15,
    // fontWeight:'bold',
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',

    borderRadius: 40,
    // margin:130,
    marginLeft: 125,
    marginRight: 125,
  },
  signInButton: {
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginTop: 10,
    padding: 15,
    // fontWeight:'bold',
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',
    borderRadius: 40,
    marginLeft: 125,
    marginRight: 125,
  },
  language: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
});
