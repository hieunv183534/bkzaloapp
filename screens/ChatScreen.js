import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChatService from '../src/api/ChatService';
import ConversationApi from '../src/api/ConversationApi';
import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@microsoft/signalr';


const ChatScreen = (route) => {
  const [messages, setMessages] = useState([]);
  const [user, onChangeUserText] = useState('');
  const [userName, onUserName] = useState('');
  const [conversationId, onConversationId] = useState('');
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
    const { userName, phone, token, receiveID, conversationId } = route.route.params;
    onUserName(userName);
    onPhone(phone);
    onToken(token.split(' ')[1]);
    onReceiveID(receiveID);
    onConversationId(conversationId)
    console.log("conversationId: ", conversationId);
    console.log("userName: ", userName);

    const conversationApi = new ConversationApi(token);
    conversationApi
      .getConversation(conversationId, 0, 10)
      .then((res) => {
        console.log(res);
        if (res.data.code === 1000) {
          let messages = [];
          const mess = res.data.data.messages;
          for (let i in mess) {
            let gui = 0;
            if (receiveID === mess[i].sender.accountId) {
              gui = 2;
            }
            else {
              gui = 1;
            }
            const curr = {
              _id: mess[i].messageId,
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
  }, []);

  useEffect(() => {
    const { token, conversationId } = route.route.params;
    console.log("token: ", token.split(' ')[1]);

    const connection = new HubConnectionBuilder()
      .withUrl("http://hieunv183534-001-site1.gtempurl.com/chat",
        {
          accessTokenFactory: () => token.split(' ')[1],
          transport: HttpTransportType.LongPolling
        })
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("onmessage", (user, message) => {
      console.log(`${user} say ${JSON.stringify(message)}`);
      console.log("message.messageId: ", message.messageId);
      if (message.messageId !== undefined) {
        let ex = false;
        for (let i in messages) {
          if (messages[i]._id === message.messageId) ex = true;
        }
        const gui = receiveID === message.senderId ? 2 : 1;
        if (!ex && gui === 2) {
          const mess = {
            _id: message.messageId,
            text: message.content,
            createdAt: message.createdAt,
            user: {
              _id: gui,
              name: '',
              avatar: 'https://placeimg.com/140/140/any',
            },
          };
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [mess]),
          );
        }
      }
      console.log("message123: ", message)
    });

    connection.start().then(() => {
      console.log("okok");
      connection.invoke("JoinChat", conversationId);
      // setTimeout(() => {
      //   var mes = { conversationId: "b8e30df1-6fd3-11ec-ac96-00155e015604", content: "Test nhé okok!", receiverId: "0b3f2323-6dd3-11ec-ac96-00155e015604" };
      //   connection.invoke('Send', mes);
      // }, 10000)
    });
    onChatServer(connection);
  }, []);

  const onSend = (messages) => {
    var mes = { conversationId: conversationId, content: messages[0].text, receiverId: receiveID };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
    chatServer.invoke('Send', mes);
    console.log("mess send: ", messages);

  }
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
