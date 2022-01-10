import BaseApiConfig, { headers } from './BaseApiConfig.js';

class PostApi {
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
   * đăng 1 bài viết mới
   * @param {*} mediaUrls mảng string : url của các ảnh(3-4 ảnh là tối đa)
   * @param {*} described nội dung text của bài viết
   * @returns {
   *  -code
   *  -message
   *  -data:{postId}
   * }
   */
  addPost(mediaUrls, described) {
    let body = { mediaUrls, described };
    return BaseApiConfig.post('add_post', body, this.headers);
  }

  /**
   * lấy 1 bài viết theo id
   * @param {*} id id bài viết
   * @returns {
   *  -code
   *  -message
   *  -data:{post}
   * }
   */
  getPost(id) {
    return BaseApiConfig.get(`get_post/${id}`, this.headers);
  }

  /**
   * xóa 1 bài viết theo id (nếu là chủ, nếu ko phải chủ bài viết sẽ trả về lỗi tương ứng)
   * @param {*} id id bài viết
   * @returns {
   *  -code
   *  -message
   *  -data:{}
   * }
   */
  deletePost(id) {
    return BaseApiConfig.delete(`delete_post/${id}`, this.headers);
  }

  /**
   * chỉnh sửa bài viết
   * @param {*} post{
   *  -postId: Id bài viết muốn cập nhật. required
   *  -described : nếu không thay đổi gì thì để null. nếu ko null mặc định thay đổi và bị ghi đè
   *  -mediaUrls: nếu không thay đổi gì thì để null. nếu ko null mặc định thay đổi và bị ghi đè
   * }
   * @returns {
   *  -code
   *  -message
   *  -data:{}
   * }
   */
  editPost(post) {
    return BaseApiConfig.put(`edit_post/${post.postId}`, post, this.headers);
  }

  /**
   * like hoặc unlike 1 bài viết
   * @param {*} postId
   * @returns
   */
  like(postId) {
    return BaseApiConfig.post(`like/${postId}`, {}, this.headers);
  }

  /**
   * lấy danh sách bài viết (lấy đc từ mới đến cũ)
   * @param {*} index
   * @param {*} count
   * @returns
   */
  getListPost(index, count) {
    return BaseApiConfig.get(
      `get_list_post?index=${index}&count=${count}`,
      this.headers,
    );
  }

  /**
   * lấy số bài viết mới chưa được hiển thị
   * @param {*} lastId id bài viết mới nhất mà người dùng đang có, lấy số lượng bài viết mới hơn
   * @returns
   */
  checkNewItem(lastId) {
    return BaseApiConfig.post(`check_new_item?lastId=${lastId}`, this.headers);
  }
}

export default PostApi;
