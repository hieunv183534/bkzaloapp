import BaseApiConfig, {formHeaders, headers} from './BaseApiConfig.js';

class FileApi {
  constructor(token) {
    this.token = token;
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
    let formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file);
    });
    console.log('formData: ', formData);
    return BaseApiConfig.post('uploadFiles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: this.token,
      },
    });
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
    return BaseApiConfig.post('deleteFiles', fileNames, headers);
  }

  /**
   * lấy về 1 ảnh theo tên
   * @param {*} fileName
   * @returns
   */
  getFile(fileName) {
    return BaseApiConfig.get(`getFile/${fileName}`, headers);
  }
}

export default FileApi;
