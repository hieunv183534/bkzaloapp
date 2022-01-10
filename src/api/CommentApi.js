import BaseApiConfig, { headers } from "./BaseApiConfig.js";

class CommentApi {
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
     * lấy các comment của 1 bài viết
     * @param {*} postId id của bài viết
     * @param {*} index chỉ số bắt đầu
     * @param {*} count số comment muốn lấy
     * @returns {
     *  -code
     *  -message
     *  -data{ 1 list {commentId,content,createdAt,poster:{accountId,userName,avatarUrl}} }
     * }
     */
    getComment(postId, index, count) {
        return BaseApiConfig.get(`get_comment?postId=${postId}&index=${index}&count=${count}`, this.headers);
    }

    /**
     * comment vào 1 bài viết
     * @param {*} postId id bài viết
     * @param {*} content nội dung comment
     * @returns {
     *  -code
     *  -message
     *  -data{commentId,content,poster:{accountId,userName,avatarUrl} }
     * }
     */
    setComment(postId, content) {
        let body = { postId, content };
        return BaseApiConfig.post('set_comment', body, this.headers);
    }

    /**
     * xóa 1 comment của bản thân
     * @param {*} id 
     * @returns {
     *  -code
     *  -message
     *  -data{}
     * }
     */
    deleteComment(id) {
        return BaseApiConfig.delete(`delete_comment/${id}`, this.headers);
    }

    /**
     * chỉnh sửa 1 comment
     * @param {*} comment object comment lấy từ chính object comment đã get nhưng thay đổi mỗi trường content
     * @returns {
     *  -code
     *  -message
     *  -data{}
     * }
     */
    editComment(comment) {
        return BaseApiConfig.put(`edit_comment/${comment.commentId}`, body, this.headers);
    }
}

export default CommentApi;