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
// import {signup} from '../src/api/AccountApi';
import AccountApi from '../src/api/AccountApi';

const SignUpScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const ProcessSignUp = async () => {
    if (phone.length != 0 && name.length != 0 && password.length != 0) {
      console.log('phone: ', phone);
      console.log('name: ', name);
      console.log('password: ', password);
      const accountApi = new AccountApi('');
      await accountApi.signup(name, phone, password).then((res) => {
        console.log(res.data);
        if (res.data.code === 1000) {
          navigation.navigate('Login');
        }
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={stylesSignUp.text1}>
        Nhập số điện thoại của bạn để tạo tài khoản mới
      </Text>
      <TextInput
        style={stylesSignUp.input}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => {
          this.secondTextInput.focus();
        }}
        blurOnSubmit={false}
        onChangeText={(text) => setPhone(text)}
        maxLength={10}
      />
      <TextInput
        style={stylesSignUp.input}
        placeholder="Nhập tên của bạn"
        returnKeyType="next"
        onSubmitEditing={() => {
          this.secondTextInput.focus();
        }}
        blurOnSubmit={false}
        onChangeText={(text) => setName(text)}
        maxLength={10}
      />
      <TextInput
        style={stylesSignUp.input}
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 400,
        }}>
        <View>
          <Text style={stylesSignUp.text2}>Tiếp tục nghĩa là bạn đồng ý</Text>
          <Text style={stylesSignUp.text2}>
            {' '}
            với các <Text style={stylesSignUp.text3}>điều khoản</Text> sử dụng
            Zalo
          </Text>
        </View>
        <TouchableOpacity
          style={stylesSignUp.button}
          // onPress={() => navigation.navigate('SignUpScreen2')}
          onPress={ProcessSignUp}>
          <Text style={{color: 'white', fontSize: 20}}>➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const stylesSignUp = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center',
  },
  text1: {
    backgroundColor: '#f2f2f2',
    color: 'black',
    padding: 15,
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    marginBottom: 20,
  },
  input: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 2,
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    color: '#ccc',
    borderBottomColor: '#1e90ff',
    borderBottomWidth: 1,
    borderBottomStartRadius: 80,
  },
  text2: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    marginLeft: 15,
  },
  text3: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    marginLeft: 15,
    textDecorationLine: 'underline',
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(30,144,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: ' #1e90ff',
    borderRadius: 50,
    backgroundColor: '#1e90ff',
    marginRight: 15,
  },
});
