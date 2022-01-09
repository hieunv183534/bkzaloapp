import BaseApiConfig from './BaseApiConfig.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AccountApi {
  constructor(token) {
    this.token = token;
    this.connection = null;

    this.headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token,
      },
    };
  }

  /**
   * Đăng nhập
   * @param {*} phoneNumber
   * @param {*} password
   * @returns {
   *  -code
   *  -message
   *  -data :{ token }
   * }
   */
  login(phoneNumber, password) {
    let body = { phoneNumber, password };
    return BaseApiConfig.post('login', body, this.headers);
  }

  /**
   * đăng kí tài khoản
   * @param {*} userName
   * @param {*} phoneNumber 10 kí tự số chứa 0 ở đầu
   * @param {*} password 6 đến 10 kí tự ko chứa kí tự đặc biêt
   * @returns {
   *  -code
   *  -message
   *  -data :{  }
   * }
   */
  signup(userName, phoneNumber, password) {
    let body = { userName, phoneNumber, password };
    return BaseApiConfig.post('signup', body, this.headers);
  }

  /**
   * đăng xuất
   * @returns {
   *  -code
   *  -message
   *  -data :{  }
   * }
   */
  logout() {
    return BaseApiConfig.post('logout', this.headers);
  }

  /**
   * đổi mật khẩu người dùng
   * @param {*} password
   * @param {*} newPassword
   * @returns {
   *  -code
   *  -message
   *  -data :{  }
   * }
   */
  changePassword(password, newPassword) {
    return BaseApiConfig.post(
      `change_password?password=${password}&newPassword=${newPassword}`,
      this.headers,
    );
  }

  /**
   * lấy thông tin 1 tài khoản người khác bằng sdt
   * @param {*} phoneNumber
   * @returns {
   *  -code
   *  -message
   *  -data :{ accountId,userName,phoneNumber,avatarUrl }
   * }
   */
  getAccountByPhoneNumber(phoneNumber) {
    console.log('this.headers', this.headers);
    console.log('this.token', this.token);
    console.log('phoneNumber', phoneNumber);
    return BaseApiConfig.get(
      `getAccountByPhoneNumber/${phoneNumber}`,
      this.headers,
    );
  }

  /**
   * chỉnh sửa tên hoặc avatar
   * @param {*} userName
   * @param {*} avatarUrl
   * @returns {
   *  -code
   *  -message
   *  -data :{  }
   * }
   */
  editAccount(userName, avatarUrl) {
    let body = { userName, avatarUrl };
    return BaseApiConfig.post('edit_account', body, this.headers);
  }
}

export default AccountApi;
