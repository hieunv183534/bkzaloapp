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
import PostApi from '../src/api/PostApi';
import FileApi from '../src/api/FileApi';
import { useIsFocused } from "@react-navigation/native";
const NhatKy = ({ navigation }) => {
  const [singleFile, setSingleFile] = useState(null);
  const [token, onToken] = useState('');
  const [listPosts, onListPosts] = useState([]);
  const isFocused = useIsFocused();

  const formatDateTime = (_date) => {
    if (_date != null) {
      var date = new Date(_date);
      var day = date.getDate();
      day = (day < 10) ? '0' + day : day;
      var month = date.getMonth() + 1;
      month = (month < 10) ? '0' + month : month;
      var year = date.getFullYear();

      var hour = date.getHours();
      hour = (hour < 10) ? '0' + hour : hour;
      var minit = date.getMinutes();
      minit = (minit < 10) ? '0' + minit : minit;

      return hour + ":" + minit + " " + day + '/' + month + '/' + year;
    }
    else {
      return '';
    }
  }

  const likeAction = (postId) => {
    console.log('postId: ', postId);
    console.log('token: ', token);
    const postApi = new PostApi(token);
    postApi
      .like(postId)
      .then(async (res) => {
        console.log('likeApi: ', res);
        //res.data.data.conversations = [] => conversationId/ lastMessage.content * createdAt/ partner.accountId *avatarUrl *userName
        if (res.data.code === 1000) {
          displayNhatKy()
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const displayNhatKy = () => {
    AsyncStorage.getItem('token').then(async (data) => {
      onToken(data);
      const postApi = new PostApi(data);
      const fileApi = new FileApi(data);
      await postApi
        .getListPost(0, 10)
        .then(async (res) => {
          console.log('postApi: ', res);
          //res.data.data.conversations = [] => conversationId/ lastMessage.content * createdAt/ partner.accountId *avatarUrl *userName
          if (res.data.code === 1000) {
            let posts = [];
            const conv = res.data.data;
            for (let i in conv) {
              const img = conv[i].allMediaUrl;
              let blob;
              let base64data;
              await fileApi.getFile(img).then((rest) => blob = rest.data);
              const fileReaderInstance = new FileReader();
              fileReaderInstance.readAsDataURL(blob);
              fileReaderInstance.onload = () => {
                base64data = fileReaderInstance.result;
                base64data = base64data.replace('application/octet-stream', 'image/jpeg')
                const curr = {
                  id: conv[i].postId,
                  name: conv[i].author.userName,
                  image: './assets/avatar1.png',
                  // imageUri: "data:image/png;base64," + blob,
                  imageUri: base64data,
                  time: conv[i].createdAt,
                  content: conv[i].described,
                  like: conv[i].like,
                  comment: conv[i].comment,
                  isLike: conv[i].isLiked,
                };
                posts.push(curr)
              }
            }
            console.log("posts: ", posts)
            onListPosts(posts);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  useEffect(() => {
    displayNhatKy();
  }, [isFocused]);

  // useEffect(() => {
  //   console.log("token: ", token)
  // }, []);
  const selectFile = async () => {
    // Opening Document Picker to select one file

    ImagePicker.openPicker({
      width: 200,
      height: 150,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setSingleFile(imageUri);
      navigation.navigate('DangBai', { imgInfo: imageUri, token: token });
    });
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
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
                <TouchableOpacity onPress={displayNhatKy}>
                  <Image
                    style={stylesSearchBar.image}
                    source={require('./assets/nhatKy2.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ThongBao')}>
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
          data={listPosts}
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
                    <Text style={stylesNhatKy.timePost}>{formatDateTime(item.time)}</Text>
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
                // source={require('./assets/baiDang1.png')}
                source={{ uri: item.imageUri }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                }}>
                <TouchableOpacity onPress={() => { likeAction(item.id) }}>
                  <Image
                    style={stylesNhatKy.image2}
                    source={item.isLike ? require('./assets/nhatKy8red.png') : require('./assets/nhatKy8.png')}
                  />
                </TouchableOpacity>
                <Text>{item.like}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Nhật ký', { item: item, token: token }); }}>
                  <Image
                    style={stylesNhatKy.image2}
                    source={require('./assets/nhatKy9.png')}
                  />
                </TouchableOpacity>
                <Text>{item.comment}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
          ListFooterComponent={<View style={{ height: 350 }} />}
        />
      </View>
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
