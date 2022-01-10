import React from 'react';
import {View, Text, Image, ScrollView, Button, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';

const ThongBao1 = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];


const ThongBao = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity style={{ backgroundColor:'white'}}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            style={stylesNhanTin.avatarImage}
            source={require('./assets/avatar1.png')}
          />
        
              <View>
              {/* <TouchableOpacity activeOpacity={0.2} onPress={() =>{navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});}}> */}
                <Text style={stylesNhanTin.nameText}>
                  Anna Nguyen
                </Text>
                <Text style={stylesNhanTin.messengerText}>
                  Thông báo thông báo @@
                </Text>
                </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor:'white', marginTop:3}}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            style={stylesNhanTin.avatarImage}
            source={require('./assets/avatar1.png')}
          />
        
              <View>
              {/* <TouchableOpacity activeOpacity={0.2} onPress={() =>{navigation.navigate('NhanTin2', {itemId: item.id, itemName: item.name,});}}> */}
                <Text style={stylesNhanTin.nameText}>
                  Anna Nguyen
                </Text>
                <Text style={stylesNhanTin.messengerText}>
                  Thông báo thông báo @@
                </Text>
                </View>
                </View>
            </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};

export default ThongBao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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