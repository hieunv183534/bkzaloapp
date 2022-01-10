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
import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';
import FileApi from '../src/api/FileApi';
import PostApi from '../src/api/PostApi';

const DangBai = ({ navigation, route }) => {
  const [imgInfo, onImgInfo] = useState(null);
  const [text, onChangeText] = useState('');
  const [userName, onUserName] = useState('');
  const [phone, onPhone] = useState('');
  const [token, onToken] = useState('');
  const [receiveID, onReceiveID] = useState('');
  const [chatServer, onChatServer] = useState(null);
  const [message, onChangeMessageText] = useState('');
  // const [conn, setConn] = useState(null);
  const [messageLog, setMessageLog] = useState([]);
  const [connectionState, setConnectedStateText] = useState('');
  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    const { imgInfo, token } = route.params;
    onImgInfo(imgInfo);
    onToken(token);
  }, []);

  const uploadStatus = async () => {
    console.log('text: ', text);
    console.log('imgInfo: ', imgInfo);
    let arrImg = [];
    arrImg.push(imgInfo);
    console.log('arrImg: ', arrImg);
    const fileApi = new FileApi(token);
    const postApi = new PostApi(token);
    fileApi.uploadFiles(arrImg).then((res) => {
      console.log('res: ', res);
      // fileApi.getFile(res.data[0]).then((rest) => console.log("rest:", rest))
      postApi.addPost(res.data, text).then((res) => {
        console.log('resDANG: ', res);
      });
      navigation.navigate('NhatKy')
      console.log('AAAAAAAAAAAAAAA');
    });
    console.log('Upload imgInfo store!');
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView>
        <View>
          <TextInput
            style={{
              marginBottom: imgInfo === null ? 200 : 50,
              marginLeft: 12,
              marginRight: 12,
              marginTop: 10,
              padding: 2,

              fontSize: 14,
              fontFamily: 'Sans-Serif',
              color: '#ccc',
              // borderBottomColor:'#d3d3d3',
              // borderBottomWidth:1,
              // borderBottomStartRadius:80,
            }}
            placeholder="Bạn đang nghĩ gì?"
            onChangeText={(text) => onChangeText(text)}
          />

          {imgInfo != null ? <AddImage source={{ uri: imgInfo }} /> : null}
          {/* {imgInfo !== null && imgInfo[0].uri !== undefined ? (
            <Image
              style={stylesNhatKy.loadPost}
              source={require('./assets/baiDang1.png')}
              // source={{uri: imgInfo[0].uri}}
            />
          ) : (
            ''
          )} */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginRight: 15,
              marginBottom: 5,
              marginTop: 5,
            }}>
            <TouchableOpacity>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/dangBai1.png')}
                />
                <Text>Nhạc</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/dangBai2.png')}
                />
                <Text>Album</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/dangBai3.png')}
                />
                <Text>Với bạn bè</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 15,
              marginBottom: 5,
              marginTop: 5,
            }}>
            <TouchableOpacity>
              <Image
                style={stylesNhatKy.image2}
                source={require('./assets/dangBai4.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/dangBai5.png')}
                />
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/dangBai6.png')}
                />
                <Image
                  style={stylesNhatKy.image2}
                  source={require('./assets/dangBai7.png')}
                />
                <TouchableOpacity onPress={uploadStatus}>
                  <Image
                    style={stylesNhatKy.image2}
                    source={require('./assets/dangBai8.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      <TouchableOpacity>
          <Text style={{marginLeft:300, marginRight:15, marginTop:15,marginBottom:15, backgroundColor:'#1e90ff', padding: 10, textAlign:'center', color:'white'}}>
              Đăng bài
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default DangBai;

const stylesDangBai = StyleSheet.create({
  container: {
    width: 500,
  },

  input: {
    marginBottom: 200,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 2,
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    color: '#ccc',
    // borderBottomColor:'#d3d3d3',
    // borderBottomWidth:1,
    // borderBottomStartRadius:80,
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
  loadPost: {
    height: 200,
    width: 200,
    opacity: 0.8,
    marginLeft: 100,
    marginBottom: 10,
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
