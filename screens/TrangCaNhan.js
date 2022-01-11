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
  ToastAndroid,
} from 'react-native';
import LogInImage from './assets/logIn.png';
import AvatarImage1 from './assets/avatar1.png';
import LogInImage3 from './assets/logIn3.png';
import { color, onChange } from 'react-native-reanimated';
import { Feather } from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import PostApi from '../src/api/PostApi';
import FileApi from '../src/api/FileApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountApi from '../src/api/AccountApi';

const TrangCaNhan = ({ navigation, route }) => {
  const [singleFile, setSingleFile] = useState(null);
  const [imgInfo, onImgInfo] = useState(null);
  const [token, onToken] = useState('');
  const [userName, onUserName] = useState('');
  const [tempUserName, onTempUserName] = useState('');
  const [avatarUrl, onAvatarUrl] = useState(null);


  useEffect(() => {
    const { avatarUrl, token, userName } = route.params;
    console.log("avatarUrl: ", avatarUrl);
    onToken(token);
    onUserName(userName)
    onTempUserName(userName)
    if (avatarUrl !== null) {
      onAvatarUrl(avatarUrl)
      getImage(avatarUrl, token)
    }
  }, []);

  const getImage = (avatarUrl, token) => {
    console.log("avatarUrl ", avatarUrl);
    console.log("token ", token);

    const fileApi = new FileApi(token);
    fileApi.getFile(avatarUrl).then((rest) => {
      let blob;
      let base64data;
      blob = rest.data;
      const fileReaderInstance = new FileReader();
      console.log("token: ", token);
      console.log("blob: ", blob);

      fileReaderInstance.readAsDataURL(blob);
      fileReaderInstance.onload = () => {
        base64data = fileReaderInstance.result;
        base64data = base64data.replace('application/octet-stream', 'image/jpeg')
        console.log("qqqqqqqqqqqqqqq ", base64data);
        onImgInfo(base64data);
      }
    });
  }

  const showToastWithGravityAndOffset = (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const saveUserInfor = () => {
    const accountApi = new AccountApi(token);
    console.log("tempUserName: ", tempUserName);
    console.log("avatarUrl: ", avatarUrl);
    accountApi.editAccount(tempUserName, avatarUrl).then((res) => {
      console.log('editAccount: ', res.data);
      if (res.data.code === 1000) {
        showToastWithGravityAndOffset("Thông tin đã được thay đổi");
        AsyncStorage.setItem('avatarUrl', avatarUrl);
        AsyncStorage.setItem('userName', tempUserName);
      }
    })
  }

  const selectFile = () => {
    // Opening Document Picker to select one file
    ImagePicker.openPicker({
      width: 200,
      height: 150,
      cropping: true,
      cropperCircleOverlay: true
    }).then((image) => {
      // console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      console.log("AAAAAAAAAAAAAAAAAAAAAAA");
      console.log("token: ", token);
      let arrImg = [];
      arrImg.push(imageUri);
      const fileApi = new FileApi(token);
      fileApi.uploadFiles(arrImg).then((res) => {
        console.log('fileApi: ', res.data);
        if (res.data !== null && res.data[0] !== '') {
          onAvatarUrl(res.data[0])
          // AsyncStorage.setItem('avatarUrl', res.data[0]);
          console.log('fileApi: ', res.data[0]);
          getImage(res.data[0], token)
        }
      })
      // onImgInfo(imageUri);
      // navigation.navigate('DangBai', { imgInfo: imageUri, token: token });
    });
  };
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
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={require('./assets/trangCaNhan1.png')}
          resizeMode="cover"
          style={{ width: 400 }}>
          <TouchableOpacity onPress={selectFile}>

            <Image
              style={{ height: 60, width: 60, borderRadius: 60 / 2, marginTop: 170, marginLeft: 175 }}
              // source={require('./assets/avatar1.png')}
              source={imgInfo !== null ? { uri: imgInfo } : require('./assets/zalologo.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
        <TextInput
          style={{
            fontSize: 16,
            color: 'black',
            textAlign: 'center',
            marginTop: 5,
          }}
          onChangeText={(text) => onTempUserName(text)}
          value={tempUserName}
        />

        <Text style={{ color: '#1e90ff', textAlign: 'center' }}>
          Thêm giới thiệu bản thân
        </Text>

        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              backgroundColor: 'white',
              padding: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('DangBai')}>
              <Text>Bạn đang nghĩ gì</Text>
            </TouchableOpacity>
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={require('./assets/trangCaNhan2.png')}
            />
          </View>


        </View>
        <TouchableOpacity onPress={() => saveUserInfor()}>
          <Text
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              marginLeft: 300,
              marginRight: 20,
              padding: 10,
              color: 'black',
              marginTop: 50,
              marginBottom: 50,
              borderRadius: 50,
            }}>
            Lưu
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TrangCaNhan;

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
