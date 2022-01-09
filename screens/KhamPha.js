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

const KhamPha = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        <ScrollView>
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
              placeholder="Tìm bạn bè, tin nhắn ABC ..."
              placeholderTextColor="white"
            />
            <ScrollView>
              <View style={{flexDirection: 'row', marginTop: 0}}>
                <Image
                  style={stylesSearchBar.image}
                  source={require('./assets/khamPha2.png')}
                />
                <TouchableOpacity>
                  <Image
                    style={stylesSearchBar.image}
                    source={require('./assets/khamPha3.png')}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 15,
          }}>
          Tiện ích khác
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 0,
            marginBottom: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha4.png')}
            />
            <Text style={{textAlign: 'center'}}>Tìm quanh đây</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha5.png')}
            />
            <Text style={{textAlign: 'center'}}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha6.png')}
            />
            <Text style={{textAlign: 'center'}}>Sticker</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha7.png')}
            />
            <Text style={{textAlign: 'center'}}>Game</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 0,
            marginBottom: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha8.png')}
            />
            <Text style={{textAlign: 'center'}}>eGovernment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha9.png')}
            />
            <Text style={{textAlign: 'center'}}>Fiza</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha10.png')}
            />
            <Text style={{textAlign: 'center'}}>Ví ZaloPay</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha11.png')}
            />
            <Text style={{textAlign: 'center'}}>Nạp tiền ĐT</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha12.png')}
            />
            <Text style={{textAlign: 'center'}}>Trả hóa đơn</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha13.png')}
            />
            <Text style={{textAlign: 'center'}}>Shop Lazada</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha14.png')}
            />
            <Text style={{textAlign: 'center'}}>Home & Car</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha19.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{backgroundColor: '#f5f5f5', height: 10, width: 500}}></View>

      <View>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 15,
          }}>
          Top Games
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 0,
            marginBottom: 20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha15.png')}
            />
            <Text style={{textAlign: 'center'}}>Võ Lâm</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha16.png')}
            />
            <Text style={{textAlign: 'center'}}>Tiến Lên</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha17.png')}
            />
            <Text style={{textAlign: 'center'}}>Tú Lơ Khơ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={stylesKhamPha.image1}
              source={require('./assets/khamPha18.png')}
            />
            <Text style={{textAlign: 'center'}}>Ngọa Long</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default KhamPha;

const stylesKhamPha = StyleSheet.create({
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
