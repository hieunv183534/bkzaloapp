import React, { useContext, useState, useEffect } from 'react';
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
import { color, onChange } from 'react-native-reanimated';
import { Feather } from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";


const CaNhan = ({ navigation }) => {
  const [token, onToken] = useState('');
  const [userName, onUserName] = useState('');
  const [avatarUrl, onAvatarUrl] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {

    getAsyn();
  }, [isFocused]);

  const getAsyn = () => {
    AsyncStorage.getItem('token').then((data) => {
      console.log("token: ", data);
      onToken(data);
    });
    AsyncStorage.getItem('avatarUrl').then((data) => {
      onAvatarUrl(data);
      console.log("avatarUrl: ", data);
    });
    AsyncStorage.getItem('userName').then((data) => {
      onUserName(data);
      console.log("userName: ", data);
    });
  }

  return (
    <View style={{}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 0,
          }}>
          <Image
            style={stylesSearchBar.image}
            source={require('./assets/search.png')}
          />
          <TextInput
            style={stylesSearchBar.input}
            placeholder="Tìm bạn bè, tin nhắn ..."
            placeholderTextColor="white"
          />

          <View style={{ flexDirection: 'row', marginTop: 0 }}>
            <TouchableOpacity>
              <Image
                style={stylesSearchBar.image}
                source={require('./assets/caNhan2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CaiDat')}>
              <Image
                style={stylesSearchBar.image}
                source={require('./assets/caNhan3.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 0,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TrangCaNhan', { userName: userName, avatarUrl: avatarUrl, token: token })}>
              <Image
                style={stylesCaNhan.image1}
                source={require('./assets/avatar1.png')}
              />
            </TouchableOpacity>
            <View>
              <Text style={stylesCaNhan.text1}>{userName}</Text>
              <Text style={stylesCaNhan.text2}>Xem trang cá nhân</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ marginTop: 25, marginRight: 15, width: 40, height: 40 }}
            source={require('./assets/caNhan8.png')}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 5,
            backgroundColor: 'white',
          }}>
          <Image
            style={stylesCaNhan.image2}
            source={require('./assets/caNhan4.png')}
          />
          <View>
            <Text style={stylesCaNhan.text1}>Ví QR</Text>
            <Text style={stylesCaNhan.text2}>
              Lưu trữ và xuất trình các mã QR quan trọng
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 5,
            backgroundColor: 'white',
          }}>
          <Image
            style={stylesCaNhan.image2}
            source={require('./assets/caNhan5.png')}
          />
          <View>
            <Text style={stylesCaNhan.text1}>Cloud của tôi</Text>
            <Text style={stylesCaNhan.text2}>
              Lưu trữ các tin nhắn quan trọng
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 5,
              backgroundColor: 'white',
            }}>
            <Image
              style={stylesCaNhan.image2}
              source={require('./assets/caNhan6.png')}
            />
            <View style={stylesCaNhan.box}>
              <Text style={stylesCaNhan.text3}>Tài khoản và bảo mật</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 0,
                backgroundColor: 'white',
              }}>
              <Image
                style={stylesCaNhan.image2}
                source={require('./assets/caNhan7.png')}
              />
              <View>
                <Text style={stylesCaNhan.text3}>Quyền riêng tư</Text>
              </View>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default CaNhan;

const stylesCaNhan = StyleSheet.create({
  container: {
    width: 500,
  },
  image1: {
    width: 50,
    height: 50,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  image2: {
    width: 40,
    height: 40,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  box: {
    width: 350,
    backgroundColor: 'white',
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 500,
  },
  text1: {
    color: 'black',
    marginTop: 5,
    fontSize: 14,
  },
  text2: {
    color: 'gray',
    marginTop: 5,
    fontSize: 12,
    marginBottom: 10,
  },
  text3: {
    color: 'black',
    marginTop: 12,
    fontSize: 14,
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
