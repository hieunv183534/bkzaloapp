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
import AccountApi from '../src/api/AccountApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listUser } from '../data/listUser';
import ConversationApi from '../src/api/ConversationApi';
import { useIsFocused } from "@react-navigation/native";
import FileApi from '../src/api/FileApi';
import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@microsoft/signalr';

const NhanTin = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const [receive, onReceive] = useState([]);
  const [phoneInput, onChangePhoneInput] = useState('');
  const [token, onToken] = useState('');
  const isFocused = useIsFocused();
  const [isNew, onIsNew] = useState(false);

  // useEffect(async () => {
  //   console.log('ConversationApi');

  // }, []);
  const showToastWithGravityAndOffset = (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

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

  useEffect(() => {
    displayConversation()
    //   setTimeout(()=>{
    //   displayConversation()
    // },10000)
    console.log("isNew: ", isNew)
  }, [isFocused, isNew]);

  // setTimeout(() => {
  //   onIsNew(!isNew)
  // }, 10000)

  const displayConversation = () => {
    AsyncStorage.getItem('token').then(async (data) => {
      onToken(data);
      console.log('ConversationApi');
      const fileApi = new FileApi(data);

      const conversationApi = new ConversationApi(data);
      console.log('data: ', data);
      await conversationApi
        .getListConversation(0, 10)
        .then(async (res) => {
          console.log("@@@@@@@@@@@@@@: ", res);
          if (res.data.code === 1000) {
            let posts = [];
            const conv = res.data.data.conversations;
            for (let i in conv) {
              const img = conv[i].partner.avatarUrl;
              let blob;
              let base64data;
              if (img !== null) {
                console.log("333333333333333333");
                await fileApi.getFile(img).then(async (rest) => {
                  blob = rest.data;
                  const fileReaderInstance = new FileReader();
                  await fileReaderInstance.readAsDataURL(blob);
                  fileReaderInstance.onload = () => {
                    base64data = fileReaderInstance.result;
                    base64data = base64data.replace('application/octet-stream', 'image/jpeg')

                    const curr = {
                      id: conv[i].partner.accountId,
                      conversationId: conv[i].conversationId,
                      name: conv[i].partner.userName,
                      phone: '00000000000',
                      // image: img !== null ? require('./assets/zalologo.png') : img,
                      image: base64data,
                      message: conv[i].lastMessage.content,
                      time: conv[i].lastMessage.createdAt,
                    };
                    console.log("cur1111111111: ", curr);
                    posts.push(curr);
                  }
                });

              } else {
                console.log("444444444444444");

                const curr = {
                  id: conv[i].partner.accountId,
                  conversationId: conv[i].conversationId,
                  name: conv[i].partner.userName,
                  phone: '00000000000',
                  // image: img !== null ? require('./assets/zalologo.png') : img,
                  image: null,
                  message: conv[i].lastMessage.content,
                  time: conv[i].lastMessage.createdAt,
                };
                console.log("cur222222: ", curr);
                posts.push(curr)
              }
              console.log("posts9999999999999999999: ", posts)

            }
            console.log("posts: ", posts)
            // onListPosts(posts);
            setConversations(posts);
            onReceive(posts);

          }
        }).catch(async (error) => {
          await navigation.navigate('DangXuat');
          AsyncStorage.removeItem('token');
          showToastWithGravityAndOffset("Tài khoản đã được đăng nhập máy khác");

          // console.error("9994554645:", error.data);
          // console.error("9994554645:", error.code);
        });
    });
  }
  // const abc = (conversations) => {
  //   console.log("conversations1111 ", conversations);
  //   onReceive(conversations);
  // }
  const getAccountByPhone = async (text) => {
    if (text !== '') {
      let arr = [];
      if (text.length >= 10) {
        const accountApi = new AccountApi(token);
        await accountApi
          .getAccountByPhoneNumber(text)
          .then((res) => {
            console.log(res.data);
            const img = res.data.data.avatarUrl;
            const curr = {
              id: res.data.data.accountId,
              name: res.data.data.userName,
              phone: res.data.data.phoneNumber,
              // image: img !== null ? require('./assets/zalologo.png') : img,
              image: null,
              message: 'message',
              time: '15 phút',
            };
            console.log('image: ', curr.image);
            arr.push(curr);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      onReceive(arr);
    } else {
      // console.log("conversations: ", conversations);
      onReceive(conversations);
    }
  };

  // const NhanTin2=() =>navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
            placeholder="Tìm bạn bè, tin nhắn..."
            // onChangeText={(text) => onChangePhoneInput(text)}
            onChangeText={(text) => getAccountByPhone(text)}
            placeholderTextColor="white"
          />

          <View style={{ flexDirection: 'row', marginTop: 0 }}>
            <TouchableOpacity>
              <Image
                style={stylesSearchBar.image}
                source={require('./assets/tinNhan2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={stylesSearchBar.image}
                source={require('./assets/tinNhan3.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: 'white' }}>
        <FlatList
          data={receive}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() =>
                  navigation.navigate('Chat', {
                    userName: item.name,
                    conversationId: item.conversationId,
                    phone: item.phone,
                    token: token,
                    receiveID: item.id,
                    image: item.image,
                  })
                }>
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                  <Image
                    style={stylesNhanTin.avatarImage}
                    source={item.image !== null ? { uri: item.image } : require('./assets/zalologo.png')}
                  />
                  {/* </TouchableOpacity> */}
                  <ScrollView
                    style={{
                      borderBottomColor: '#d3d3d3',
                      borderBottomWidth: 1,
                      borderBottomStartRadius: 0,
                      borderTopEndRadius: 400,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 0,
                      }}>
                      {/* <TouchableOpacity activeOpacity={0.2} onPress={() =>{navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});}}> */}
                      <View>
                        <Text style={stylesNhanTin.nameText}>
                          {item.name}
                        </Text>
                        <Text style={stylesNhanTin.messengerText}>
                          {item.message}
                        </Text>
                      </View>
                      <Text style={stylesNhanTin.messengerTime}>
                        {formatDateTime(item.time)}
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => `${item.conversationId}`}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </View>
      <View>
        <Text style={{ marginTop: 30, textAlign: 'center' }}>
          Dễ dàng tìm kiếm và trò chuyện với bạn bè
          </Text>
        <TouchableOpacity activeOpacity={0.2}>
          <Text style={stylesNhanTin.button}>TÌM THÊM BẠN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NhanTin;

const stylesNhanTin = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center',
  },
  input: {
    backgroundColor: '#1e90ff',
    color: 'white',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
  },
  nameText: {
    fontSize: 13,
    fontFamily: 'Sans-Serif',
    // marginLeft:15,
    marginTop: 15,
    color: 'black',
  },
  messengerText: {
    fontSize: 11,
    fontFamily: 'Sans-Serif',
    marginTop: 5,
  },
  messengerTime: {
    fontSize: 11,
    fontFamily: 'Sans-Serif',
    marginTop: 15,
    marginRight: 15,
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
