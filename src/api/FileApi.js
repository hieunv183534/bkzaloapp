import BaseApiConfig, { formHeaders, headers } from './BaseApiConfig.js';

class FileApi {
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
   * upload 1 số ảnh lên server
   * @param {*} files danh sách các ảnh
   * @returns {
   *  -code
   *  -message
   *  -data {1 list các fileUrls}
   * }
   */
  uploadFiles(files) {
    console.log(files);
    let formData = new FormData();
    files.forEach((file) => {
      formData.append('file', {
        uri: file,
        type: 'image/jpg',
        name: 'image.jpg',
      });
    });
    console.log('formData: ', formData);
    return BaseApiConfig.post('uploadFiles', formData, this.headers);
  }

  /**
   * xóa 1 số ảnh
   * @param {*} fileNames list tên các ảnh
   * @returns {
   *  -code
   *  -message
   *  -data {}
   * }
   */
  deleteFiles(fileNames) {
    return BaseApiConfig.post('deleteFiles', fileNames, this.headers);
  }

  /**
   * lấy về 1 ảnh theo tên
   * @param {*} fileName
   * @returns
   */
  getFile(fileName) {
    return BaseApiConfig.get(`getFile/${fileName}`, {
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token,
      }
    });
  }
}

export default FileApi;
