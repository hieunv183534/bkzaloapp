import BaseApiConfig, {headers} from './BaseApiConfig.js';

class PostApi {
  constructor() {}

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
    let body = {mediaUrls, described};
    return BaseApiConfig.post('add_post', body, headers);
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
    return BaseApiConfig.get(`get_post/${id}`, headers);
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
    return BaseApiConfig.delete(`delete_post/${id}`, headers);
  }

  /**
   * chỉnh sửa bài viết
   * @param {*} post object bài viết lấy từ biding và thay đổi mỗi described, mediaUrls, canComment
   * @returns {
   *  -code
   *  -message
   *  -data:{}
   * }
   */
  editPost(post) {
    return BaseApiConfig.put(`edit_post/${post.postId}`, post, headers);
  }

  /**
   * like hoặc unlike 1 bài viết
   * @param {*} postId
   * @returns
   */
  like(postId) {
    return BaseApiConfig.post(`like/${postId}`, headers);
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
      headers,
    );
  }

  /**
   * lấy số bài viết mới chưa được hiển thị
   * @param {*} lastId id bài viết mới nhất mà người dùng đang có, lấy số lượng bài viết mới hơn
   * @returns
   */
  checkNewItem(lastId) {
    return BaseApiConfig.post(`check_new_item?lastId=${lastId}`, headers);
  }
}

export default new PostApi();
