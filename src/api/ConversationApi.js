import BaseApiConfig, { headers } from "./BaseApiConfig.js";

class ConversationApi {
    constructor(token) {
        this.token = token;

        this.headers = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.token,
            },
        };
    }
    /**
     * lấy danh sách các cuộc trò chuyện của bản thân
     * @param {*} index chỉ số bắt đầu
     * @param {*} count số cuộc hội thoại muốn lấy
     * @returns {
     *  -code
     *  -message
     *  -data {1 list {conversationId, partner:{accountId,userName,avatarUrl}, lastMessage:{messageId,content,createdAt,senderId}}}
     * }
     */
    getListConversation(index, count) {
        return BaseApiConfig.post(`get_list_conversation?index=${index}&count=${count}`, {}, this.headers);
    }

    /**
     * lấy tin nhắn từ 1 cuộc hội thoại
     * @param {*} conversationId id cuộc hội thoại
     * @param {*} index chỉ số tin nhắn muốn lấy(=0 là lấy từ tin nhắn gần nhất)
     * @param {*} count số tin nhắn muốn lấy
     * @returns {
     *  -code
     *  -message
     *  -data {conversation, messages}}
     * }
     */
    getConversation(conversationId, index, count) {
        return BaseApiConfig.post(`get_conversation?conversationId=${conversationId}&index=${index}&count=${count}`, {}, this.headers);
    }

    /**
     * xóa 1 cuộc hội thoại
     * @param {*} conversationId 
     * @returns {
     *  -code
     *  -message
     *  -data {}
     * }
     */
    deleteConversation(conversationId) {
        return BaseApiConfig.delete(`delete_conversation/${conversationId}`, this.headers);
    }
}

export default ConversationApi;