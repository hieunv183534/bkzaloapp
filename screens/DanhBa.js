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
import ConversationApi from '../src/api/ConversationApi';
import FileApi from '../src/api/FileApi';

const DanhBa = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);

  const displayDanhBa = () => {
    AsyncStorage.getItem('token').then(async (data) => {
      console.log('ConversationApi');
      const fileApi = new FileApi(data);

      const conversationApi = new ConversationApi(data);
      console.log('data: ', data);
      await conversationApi
        .getListConversation(0, 10)
        .then(async (res) => {
          console.log("???????????????: ", res);
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
                      image: base64data,
                      name: conv[i].partner.userName,
                    };
                    console.log("cur1111111111: ", curr);
                    posts.push(curr);
                  }
                });

              } else {
                console.log("444444444444444");

                const curr = {
                  id: conv[i].partner.accountId,
                  image: null,
                  name: conv[i].partner.userName,
                };
                console.log("cur222222: ", curr);
                posts.push(curr)
              }
              console.log("posts????????????????: ", posts)

            }
            console.log("DBaaaaaaaaaaaaaaaaaaaaaaaaaaaa: ", posts)
            setConversations(posts);

          }
        }).catch(async (error) => {
          await navigation.navigate('DangXuat');
          AsyncStorage.removeItem('token');
          // showToastWithGravityAndOffset("Tài khoản đã được đăng nhập máy khác");

          // console.error("9994554645:", error.data);
          // console.error("9994554645:", error.code);
        });
    });
  }

  useEffect(() => {
    displayDanhBa()
  }, [])
  const dataDanhBa = [
    { id: 1, name: 'Devin', image: './assets/avatar1.png' },
    { id: 2, name: 'Dan', image: './assets/avatar2.png' },
    { id: 3, name: 'Dominic', image: './assets/avatar2.png' },
    { id: 4, name: 'Jackson', image: './assets/avatar1.png' },
    { id: 5, name: 'James', image: './assets/avatar1.png' },
    { id: 6, name: 'Joel', image: './assets/avatar2.png' },
    { id: 7, name: 'John', image: './assets/avatar1.png' },
    { id: 8, name: 'Jillian', image: './assets/avatar2.png' },
    { id: 9, name: 'Jimmy', image: './assets/avatar1.png' },
    { id: 10, name: 'Julie', image: './assets/avatar1.png' },
  ];
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
              placeholder="Tìm bạn bè, tin nhắn DB..."
              placeholderTextColor="white"
            />
            <ScrollView>
              <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <Image
                  style={stylesSearchBar.image}
                  source={require('./assets/danhBa2.png')}
                />
                <TouchableOpacity>
                  <Image
                    style={stylesSearchBar.image}
                    source={require('./assets/danhBa3.png')}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 0,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity style={stylesDanhBa.box}>
          <Text style={stylesDanhBa.text1}>DANH BẠ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={stylesDanhBa.text2}>OFFICIAL ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={stylesDanhBa.text2}>NHÓM</Text>
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
            style={stylesDanhBa.image2}
            source={require('./assets/danhBa4.png')}
          />
          <View>
            <Text style={stylesDanhBa.text3}>Lời mời kết bạn</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <ScrollView style={stylesDanhBa.box2}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 5,
              backgroundColor: 'white',
            }}>
            <Image
              style={stylesDanhBa.image2}
              source={require('./assets/danhBa5.png')}
            />
            <View>
              <Text style={stylesDanhBa.text3}>Bạn từ danh bạ máy</Text>
            </View>
          </View>
        </ScrollView>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
          marginBottom: 15,
          backgroundColor: 'white',
        }}>
        <Text style={stylesDanhBa.text4}>Tất cả danh bạ</Text>
        <TouchableOpacity>
          <Text style={stylesDanhBa.text5}>CẬP NHẬT</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'white' }}>
        <FlatList
          data={conversations}
          renderItem={({ item }) => (
            <View>
              <ScrollView>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Chatscreen', {
                        itemId: item.id,
                        itemName: item.name,
                      });
                    }}>
                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                      <Image
                        style={stylesDanhBa.image1}
                        source={item.image !== null ? { uri: item.image } : require('./assets/zalologo.png')}
                      />
                      <Text style={stylesDanhBa.text1}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <ScrollView>
                      <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <TouchableOpacity activeOpacity={0.2}>
                          <Image
                            style={stylesDanhBa.image2}
                            source={require('./assets/danhBa6.png')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image
                            style={stylesDanhBa.image2}
                            source={require('./assets/danhBa7.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
          keyExtractor={(item) => '${item.id}'}
          ListFooterComponent={<View style={{ height: 5 }} />}
        />
      </View>

      <View style={{ backgroundColor: '#f5f5f5' }}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          Nhanh chóng thêm bạn vào Zalo từ danh bạ điện thoại
          </Text>
        <TouchableOpacity>
          <Text style={stylesDanhBa.button}>CẬP NHẬT DANH BẠ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DanhBa;

const stylesDanhBa = StyleSheet.create({
  container: {
    width: 500,
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
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
    width: 100,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 50,
  },
  box2: {
    width: 500,
    backgroundColor: 'white',
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 4,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 50,
  },
  box3: {
    width: 500,
    backgroundColor: 'white',
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 2,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 50,
  },
  text1: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  text2: {
    color: 'gray',
    marginTop: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  text3: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
  },
  text4: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    marginLeft: 10,
  },
  text5: {
    marginTop: 10,
    color: '#1e90ff',
    fontSize: 14,
    textAlign: 'center',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    color: 'white',
    marginTop: 10,
    padding: 5,
    // fontWeight:'bold',
    fontSize: 14,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',

    borderRadius: 40,
    // margin:130,
    marginLeft: 125,
    marginRight: 125,
    marginBottom: 20,
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
