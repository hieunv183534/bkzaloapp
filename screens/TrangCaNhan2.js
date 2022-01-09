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

const TrangCaNhan2 = ({navigation}) => {
  const dataTrangCaNhan = [
    {
      id: 1,
      name: 'Devin',
      image: './assets/avatar1.png',
      time: '25 tháng 12',
      content: 'Đây là bài đăng 1',
      like: 41,
      comment: 12,
    },
    {
      id: 2,
      name: 'Dan',
      image: './assets/avatar2.png',
      time: '24 tháng 12',
      content: 'Đây là bài đăng 2',
      like: 31,
      comment: 20,
    },
    {
      id: 3,
      name: 'Dominic',
      image: './assets/avatar2.png',
      time: '23 tháng 12',
      content: 'Đây là bài đăng 13',
      like: 71,
      comment: 32,
    },
    {
      id: 4,
      name: 'Jackson',
      image: './assets/avatar1.png',
      time: '22 tháng 12',
      content: 'Đây là bài đăng 14',
      like: 16,
      comment: 2,
    },
    {
      id: 5,
      name: 'James',
      image: './assets/avatar1.png',
      time: '21 tháng 12',
      content: 'Đây là bài đăng 15',
      like: 15,
      comment: 12,
    },
    {
      id: 6,
      name: 'Joel',
      image: './assets/avatar2.png',
      time: '20 tháng 12',
      content: 'Đây là bài đăng 16',
      like: 12,
      comment: 2,
    },
    {
      id: 7,
      name: 'John',
      image: './assets/avatar1.png',
      time: '14 tháng 12',
      content: 'Đây là bài đăng 17',
      like: 11,
      comment: 2,
    },
    {
      id: 8,
      name: 'Jillian',
      image: './assets/avatar2.png',
      time: '11 tháng 12',
      content: 'Đây là bài đăng 18',
      like: 12,
      comment: 2,
    },
    {
      id: 9,
      name: 'Jimmy',
      image: './assets/avatar1.png',
      time: '2 tháng 12',
      content: 'Đây là bài đăng 19',
      like: 13,
      comment: 2,
    },
    {
      id: 10,
      name: 'Julie',
      image: './assets/avatar1.png',
      time: '1 tháng 12',
      content: 'Đây là bài đăng 11',
      like: 14,
      comment: 12,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={require('./assets/trangCaNhan11.png')}
          resizeMode="cover"
          style={{width: 400}}>
          <Image
            style={{height: 60, width: 60, marginTop: 170, marginLeft: 175}}
            source={require('./assets/avatar2.png')}
          />
        </ImageBackground>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            textAlign: 'center',
            marginTop: 5,
          }}>
          Jimmy
        </Text>

        <View style={{marginLeft: 15, marginRight: 10}}>
          <FlatList
            data={dataTrangCaNhan}
            renderItem={({item}) => (
              <View>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Text style={stylesTrangCaNhan.timePost}>{item.time}</Text>
                  <Text></Text>
                </View>
                <View style={{backgroundColor: 'white'}}>
                  <View
                    style={{
                      backgroundColor: '#f5f5f5',
                      height: 4,
                      width: 500,
                    }}></View>
                  {/* <TouchableOpacity activeOpacity={0.2} onPress={() =>{navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});}}> */}
                  <Text style={stylesTrangCaNhan.contentPost}>
                    {item.content}
                  </Text>
                  <Image
                    style={stylesTrangCaNhan.image2}
                    source={require('./assets/baiDang2.png')}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: 10,
                      }}>
                      <Image
                        style={stylesTrangCaNhan.image1}
                        source={require('./assets/nhatKy8.png')}
                      />
                      <Text>{item.like}</Text>
                      <Image
                        style={stylesTrangCaNhan.image1}
                        source={require('./assets/nhatKy9.png')}
                      />
                      <Text>{item.comment}</Text>
                    </View>
                    <Image
                      style={stylesTrangCaNhan.image1}
                      source={require('./assets/trangCaNhan4.png')}
                    />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => '${item.id}'}
            ListFooterComponent={<View style={{height: 20}} />}
          />
        </View>

        <View style={{height: 100, width: 500}}></View>
      </ScrollView>
    </View>
  );
};

export default TrangCaNhan2;

const stylesTrangCaNhan = StyleSheet.create({
  container: {
    width: 500,
  },
  image1: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 5,
  },
  image2: {
    width: 100,
    height: 100,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  timePost: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Sans-Serif',
    marginRight: 15,
    backgroundColor: '#d3d3d3',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  imagePost: {
    height: 400,
    width: 400,
  },
  contentPost: {
    color: 'black',
    marginTop: 12,
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 10,
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
