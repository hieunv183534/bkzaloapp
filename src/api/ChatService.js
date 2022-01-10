import Signalr, { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ChatService {
  constructor(token) {
    this.chatUrl = 'http://hieunv183534-001-site1.gtempurl.com/chat';
    this.token = token;
    this.connection = null;
  }

  /**
   * khởi tạo kết nối
   * @returns
   */
  async connection1() {
    console.log('000000000000000000000');

    this.connection = new HubConnectionBuilder()
      .withUrl(this.chatUrl)
      .configureLogging(LogLevel.Information)
      .build();
  }

  /**
   * bắt đầu kết nối
   * @returns
   */
  async start() {
    console.log('111111111111111111111111');
    return await this.connection.start();
  }

  /**
   * bắt đầu kết nối
   * @param {*} conversationId id hội thoại
   * @returns
   */
  async joinChat(conversationId) {
    return await this.connection.invoke('JoinChat', conversationId);
  }

  /**
   * gửi tin nhắn đến 1 ngừi dùng
   * @param {*} receiverId id người nhận
   * @param {*} content nội dung chat/ string
   * @param {*} conversationId id cuộc hội thoại. Nếu để trống thì sẽ được tạo conversation mới.
   *  nhận id conversation mới tạo qua event onCreatedConversation
   * @returns
   */
  async sendMessage(receiverId, content, conversationId) {
    let message = { receiverId, content, conversationId };
    return await this.connection.invoke('Send', message);
  }

  /**
   * lắng nghe tin nhắn mới
   * @returns {
   * - senderName
   * - message
   * }
   */
  onMessage() {
    return this.connection.on('onmessage', (senderName, message) => {
      return { senderName, message };
    });
  }

  /**
   *
   * @returns tin nhắn gửi đầu tiên. .conversationId để lấy id hội thoại vừa mới được khởi tạo
   */
  onCreatedConversation() {
    return this.connection.on('onCreatedConversation', (message) => {
      return message;
    });
  }
}

export default ChatService;
