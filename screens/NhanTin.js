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
import AccountApi from '../src/api/AccountApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listUser } from '../data/listUser';
import ConversationApi from '../src/api/ConversationApi';

const NhanTin = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const [receive, onReceive] = useState([]);
  const [phoneInput, onChangePhoneInput] = useState('');
  const [token, onToken] = useState('');

  // useEffect(async () => {
  //   console.log('ConversationApi');

  // }, []);

  useEffect(() => {
    AsyncStorage.getItem('token').then(async (data) => {
      onToken(data);
      console.log('ConversationApi');
      const conversationApi = new ConversationApi(data);
      await conversationApi
        .getListConversation(0, 10)
        .then((res) => {
          console.log(res);
          //res.data.data.conversations = [] => conversationId/ lastMessage.content * createdAt/ partner.accountId *avatarUrl *userName
          if (res.data.code === 1000) {
            let conversations = [];
            const conv = res.data.data.conversations;
            for (let i in conv) {
              // console.log("conv.partner.accountId:", conv[i]);

              const curr = {
                id: conv[i].partner.accountId,
                conversationId: conv[i].conversationId,
                name: conv[i].partner.userName,
                phone: '00000000000',
                // image: img !== null ? require('./assets/zalologo.png') : img,
                image: require('./assets/zalologo.png'),
                message: conv[i].lastMessage.content,
                time: conv[i].lastMessage.createdAt,
              };
              conversations.push(curr)
            }
            setConversations(conversations);
            onReceive(conversations);

          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, []);

  const getAccountByPhone = async (text) => {
    if (text !== '') {
      let arr = [];
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
            image: require('./assets/zalologo.png'),
            message: 'message',
            time: '15 phút',
          };
          console.log('image: ', curr.image);
          arr.push(curr);
        })
        .catch((error) => {
          console.error(error);
        });
      onReceive(arr);
    } else {
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
            placeholder="Tìm bạn bè, tin nhắn NT..."
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
                  })
                }>
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                  <Image
                    style={stylesNhanTin.avatarImage}
                    source={item.image}
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
                        {item.time}
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => '${item.id}'}
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
