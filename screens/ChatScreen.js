import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChatSerrvice from '../src/api/ChatService';
import ConversationApi from '../src/api/ConversationApi';

const ChatScreen = (route) => {
  const [messages, setMessages] = useState([]);
  const [user, onChangeUserText] = useState('');
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

  useEffect(async () => {
    const { userName, phone, token, receiveID, conversationId } = route.route.params;
    onUserName(userName);
    onPhone(phone);
    onToken(token);
    onReceiveID(receiveID);
    console.log("conversationId: ", conversationId);
    console.log("userName: ", userName);

    const conversationApi = new ConversationApi(token);
    await conversationApi
      .getConversation(conversationId, 0, 10)
      .then((res) => {
        console.log(res);
        if (res.data.code === 1000) {
          let messages = [];
          const mess = res.data.data.messages;
          for (let i in mess) {
            let nhan = 0;
            let gui = 0;
            if (receiveID === mess[i].sender.accountId) {
              gui = 2;
              nhan = 1;
            }
            else {
              gui = 1;
              nhan = 2;
            }
            const curr = {
              _id: nhan,
              text: mess[i].content,
              createdAt: mess[i].createdAt,
              user: {
                _id: gui,
                name: mess[i].sender.userName,
                avatar: 'https://placeimg.com/140/140/any',
              },

            };
            messages.push(curr)
          }
          setMessages(messages)
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // onChatServer(new ChatSerrvice(token.split(' ')[1]));
    // const abc = new ChatSerrvice(token.split(' ')[1]);
    // console.log('abc: ', abc);
    // abc.connection1();
    // console.log('abc conec: ', abc.connection);

    // abc.connection.start().then((res) => {
    //   console.log('res: ', res);
    //   console.log('AAAAAAAAAAAAAAA');
    // });
  }, []);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer ABC',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 4,
  //       text: 'Hello world',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 4,
  //       text: 'yyyyyyyyyyyyyyyyyyyy',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //     {
  //       _id: 1,
  //       text: 'aaaaaaaaaaaaaaaaa',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 4,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);

  // const onSend = (messages) => {
  //   console.log('mess: ', messages);
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages),
  //   );

  //   conn.invoke('Send', `${'Đức: '} say ${messages[0].text}`);
  // };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
