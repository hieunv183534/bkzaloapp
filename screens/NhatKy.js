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
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NhatKy = ({ navigation }) => {
  const [singleFile, setSingleFile] = useState(null);
  const [token, onToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then((data) => {
      onToken(data);
    });
  }, []);
  const selectFile = async () => {
    // Opening Document Picker to select one file

    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setSingleFile(imageUri);
      navigation.navigate('DangBai', { imgInfo: imageUri, token: token });
    });
  };

  const dataNhatKy = [
    {
      id: 1,
      name: 'Devin',
      image: './assets/avatar1.png',
      time: 'Hôm qua lúc 17:40',
      content: 'Đây là bài đăng 1',
      like: 41,
      comment: 12,
    },
    {
      id: 2,
      name: 'Dan',
      image: './assets/avatar2.png',
      time: 'Hôm qua lúc 17:00',
      content: 'Đây là bài đăng 2',
      like: 31,
      comment: 20,
    },
    {
      id: 3,
      name: 'Dominic',
      image: './assets/avatar2.png',
      time: 'Hôm qua lúc 15:40',
      content: 'Đây là bài đăng 13',
      like: 71,
      comment: 32,
    },
    {
      id: 4,
      name: 'Jackson',
      image: './assets/avatar1.png',
      time: 'Hôm qua lúc 14:40',
      content: 'Đây là bài đăng 14',
      like: 16,
      comment: 2,
    },
    {
      id: 5,
      name: 'James',
      image: './assets/avatar1.png',
      time: 'Hôm qua lúc 13:40',
      content: 'Đây là bài đăng 15',
      like: 15,
      comment: 12,
    },
    {
      id: 6,
      name: 'Joel',
      image: './assets/avatar2.png',
      time: 'Hôm qua lúc 12:40',
      content: 'Đây là bài đăng 16',
      like: 12,
      comment: 2,
    },
    {
      id: 7,
      name: 'John',
      image: './assets/avatar1.png',
      time: 'Hôm qua lúc 11:40',
      content: 'Đây là bài đăng 17',
      like: 11,
      comment: 2,
    },
    {
      id: 8,
      name: 'Jillian',
      image: './assets/avatar2.png',
      time: 'Hôm qua lúc 10:40',
      content: 'Đây là bài đăng 18',
      like: 12,
      comment: 2,
    },
    {
      id: 9,
      name: 'Jimmy',
      image: './assets/avatar1.png',
      time: 'Hôm qua lúc 9:40',
      content: 'Đây là bài đăng 19',
      like: 13,
      comment: 2,
    },
    {
      id: 10,
      name: 'Julie',
      image: './assets/avatar1.png',
      time: 'Hôm qua lúc 6:40',
      content: 'Đây là bài đăng 11',
      like: 14,
      comment: 12,
    },
  ];
  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView>
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
                placeholder="Tìm bạn bè, tin nhắn ..."
                placeholderTextColor="white"
              />
              <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                  <TouchableOpacity>
                    <Image
                      style={stylesSearchBar.image}
                      source={require('./assets/nhatKy2.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={stylesSearchBar.image}
                      source={require('./assets/nhatKy3.png')}
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
              backgroundColor: 'white',
              borderColor: 'gray',
              borderRadius: 1,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TrangCaNhan')}>
              <Image
                style={stylesNhatKy.image1}
                source={require('./assets/avatar1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DangBai', { imgInfo: null })}>
              <Text style={stylesNhatKy.text1}>Hôm nay bạn thế nào?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ backgroundColor: '#f5f5f5', height: 1, width: 500 }}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 15,
              marginBottom: 5,
              marginTop: 5,
            }}>
            <TouchableOpacity onPress={selectFile}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/nhatKy4.png')}
                />
                <Text>Đăng ảnh</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/nhatKy5.png')}
                />
                <Text>Đăng video</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/nhatKy6.png')}
                />
                <Text>Tạo album</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white' }}>
          <FlatList
            data={dataNhatKy}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    backgroundColor: '#f5f5f5',
                    height: 4,
                    width: 500,
                  }}></View>
                {/* <TouchableOpacity activeOpacity={0.2} onPress={() =>{navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});}}> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginTop: 0,
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.2}
                      onPress={() => navigation.navigate('TrangCaNhan2')}>
                      <Image
                        style={stylesNhatKy.avatarPost}
                        source={require('./assets/avatar2.png')}
                      />
                    </TouchableOpacity>
                    {/* <TouchableOpacity activeOpacity={0.2} onPress={() =>{navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});}}> */}
                    <View>
                      <Text style={stylesNhatKy.namePost}>{item.name}</Text>
                      <Text style={stylesNhatKy.timePost}>{item.time}</Text>
                    </View>
                  </View>
                  <Image
                    style={stylesNhatKy.image2}
                    source={require('./assets/nhatKy7.png')}
                  />
                </View>
                <Text style={stylesNhatKy.contentPost}>{item.content}</Text>
                <Image
                  style={stylesNhatKy.imagePost}
                  source={require('./assets/baiDang1.png')}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 10,
                  }}>
                  <Image
                    style={stylesNhatKy.image2}
                    source={require('./assets/nhatKy8.png')}
                  />
                  <Text>{item.like}</Text>
                  <Image
                    style={stylesNhatKy.image2}
                    source={require('./assets/nhatKy9.png')}
                  />
                  <Text>{item.comment}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => '${item.id}'}
            ListFooterComponent={<View style={{ height: 20 }} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NhatKy;

const stylesNhatKy = StyleSheet.create({
  container: {
    width: 500,
  },
  image1: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 10,
  },
  image2: {
    width: 20,
    height: 20,
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
    color: 'gray',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
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
  avatarPost: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
  },
  namePost: {
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    // marginLeft:15,
    marginTop: 15,
    color: 'black',
  },
  timePost: {
    fontSize: 11,
    fontFamily: 'Sans-Serif',
    marginRight: 15,
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
  button: {
    backgroundColor: '#1e90ff',
    color: 'white',
    marginTop: 10,
    padding: 10,
    // fontWeight:'bold',
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',

    borderRadius: 40,
    marginBottom: 130,
    marginLeft: 120,
    marginRight: 120,
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
