import React, { useContext, useState } from 'react';
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
  Alert,
  ToastAndroid,
} from 'react-native';
import LogInImage from './assets/logIn.png';
import AvatarImage1 from './assets/avatar1.png';
import LogInImage3 from './assets/logIn3.png';
import { color, onChange } from 'react-native-reanimated';
import { Feather } from 'react-native-vector-icons/Feather';
import AccountApi from '../src/api/AccountApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen2 = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const showToastWithGravityAndOffset = (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  const processLogIn = async () => {
    if (phone.length != 0 && password.length != 0) {
      console.log('phone: ', phone);
      console.log('password: ', password);
      const accountApi = new AccountApi('');
      await accountApi
        .login(phone, password)
        .then((res) => {
          console.log('aaaaaa: ', res.data);
          if (res.data.code === 1000) {
            showToastWithGravityAndOffset("Đăng nhập thành công")
            setPassword('');
            setPhone('');
            AsyncStorage.setItem('token', res.data.data.token);
            const accountApi1 = new AccountApi(res.data.data.token);
            accountApi1.getAccountByPhoneNumber(phone).then((res) => {
              console.log('bbbbbb: ', res.data);
              if (res.data.code === 1000) {
                AsyncStorage.setItem('accountId', res.data.data.accountId);
                AsyncStorage.setItem('userName', res.data.data.userName);
                AsyncStorage.setItem('avatarUrl', res.data.data.avatarUrl);
                AsyncStorage.setItem('phoneNumber', res.data.data.phoneNumber);
                console.log('avatarUrl', res.data.data.avatarUrl);

              }
            })
            navigation.navigate('LoginScreen3');
          } else {
            showToastWithGravityAndOffset("Đăng nhập thất bại !!!")

          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // const submitPhoneNumber = (text) =>{
  //   if(text.length >10){
  //     setTodos((prevTodos) => {
  //       return [
  //         {
  //           text:text
  //         },
  //         ...prevTodos
  //       ];
  //     });
  //   }
  //   else{
  //     Alert.alert("Dài quá","Số điện thoại bạn nhập chưa chính xác. Hãy nhập lại số điện thoại có 10 chữ số", [
  //       {text:'Đồng Ý', onPress: () => console.log('alert closed')}
  //     ]);
  //   }
  // }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={stylesLogIn2.text1}>
        Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
      </Text>
      <TextInput
        style={stylesLogIn2.input}
        placeholder="Số điện thoại"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => {
          this.secondTextInput.focus();
        }}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        blurOnSubmit={false}
      />
      <TextInput
        style={stylesLogIn2.input}
        placeholder="Mật khẩu"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {/* <Input
    // style={stylesLogIn2.input}
      placeholder="Mật khẩu"
      secureTextEntry={false}
      icon={<Text>HIỆN</Text>}
      iconPosition="right"
      onChangeText={(value)=>{
        onChange({name:'pasword', value});
      }}
      /> */}

      <Text style={stylesLogIn2.text2}>Lấy lại mật khẩu</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 320,
        }}>
        <Text style={stylesLogIn2.text3}>Câu hỏi thưởng gặp</Text>
        <TouchableOpacity style={stylesLogIn2.button} onPress={processLogIn}>
          <Text style={{ color: 'white', fontSize: 20 }}>➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen2;

const stylesLogIn2 = StyleSheet.create({
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
    fontSize: 12,
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
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    borderBottomStartRadius: 80,
  },
  text2: {
    color: '#1e90ff',
    fontSize: 13,
    marginTop: 25,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 12,
    fontFamily: 'Sans-Serif',
    color: 'gray',
    marginTop: 25,
    marginLeft: 13,
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
