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

const BinhLuan = ({ navigation, route }) => {
  const [singleFile, setSingleFile] = useState(null);
  const [item, onItem] = useState(null);
  const [listPosts, onListPosts] = useState([]);

  useEffect(()=>{
    const { item } = route.params;
    console.log("item: ",item.name);
    onItem(item);
  },[])
  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView>
     {item!==null?( <View style={{ backgroundColor: 'white' }}>
       
            <View>
              <View
                style={{
                  backgroundColor: '#f5f5f5',
                  height: 4,
                  width: 500,
                }}></View>
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
                    // onPress={() => navigation.navigate('TrangCaNhan2')}
                    >
                    <Image
                      style={stylesNhatKy.avatarPost}
                      source={require('./assets/avatar2.png')}
                    />
                  </TouchableOpacity>
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
                // source={require('./assets/baiDang1.png')}
                source={{ uri: item.imageUri }}
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
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 0 }}>
                  <Image
                    style={stylesNhanTin.avatarImage}
                    source={require('./assets/avatar1.png')}
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
                          Anna Nguyen
                        </Text>
                        <Text style={stylesNhanTin.messengerText}>
                          Bai nay hay wa!!!
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent:"space-between",
            marginTop: 5,
            backgroundColor: 'white',
            borderColor: 'gray',
            borderRadius: 1,
          }}>
            <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('TrangCaNhan')}
            >
            <Image
              style={stylesNhatKy.image1}
              source={require('./assets/binhLuan01.png')}
            />
          </TouchableOpacity>
          <TextInput
        // style={stylesLogIn2.input}
        placeholder="Nhập bình luận"
        // onChangeText={(text) => setPassword(text)}
        // secureTextEntry
      />
          </View>
<View 
          style={{
            flexDirection: 'row',
            
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('TrangCaNhan')}
            >
            <Image
              style={stylesNhatKy.image1}
              source={require('./assets/binhLuan02.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('TrangCaNhan')}
            >
            <Image
              style={stylesNhatKy.image1}
              source={require('./assets/binhLuan03.png')}
            />
          </TouchableOpacity>
          </View>
        </View>

      </View>):null}
      </ScrollView>
    </View>
  );
};

export default BinhLuan;

const stylesNhatKy = StyleSheet.create({
  container: {
    width: 500,
  },
  image1: {
    width: 30,
    height: 30,
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
    fontSize: 14,
    width:300,
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

