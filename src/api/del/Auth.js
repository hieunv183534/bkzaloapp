// import Alamofire from './Alamofire';
import {URL, SIGN_UP, LOGIN} from './constant';
import axios from 'axios';

export const signup = async (name, pass, phone) => {
  const data = {
    createdAt: '2021-12-23T04:33:29.914Z',
    modifiedAt: '2021-12-23T04:33:29.914Z',
    accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    userName: name,
    password: pass,
    phoneNumber: phone,
    avatarUrl: 'string',
  };
  return await axios({
    method: 'POST',
    url: `${URL}${SIGN_UP}`,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    // console.log('URL: ', `${URL}${SIGN_UP}`);
    console.log(response.data.code);
    return response.data;
  });
};

export const login = async (pass, phone) => {
  const data = {
    createdAt: '2021-12-23T05:19:51.587Z',
    modifiedAt: '2021-12-23T05:19:51.587Z',
    accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    userName: 'string',
    password: pass,
    phoneNumber: phone,
    avatarUrl: 'string',
  };
  return await axios({
    method: 'POST',
    url: `${URL}${LOGIN}`,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    // console.log('URL: ', `${URL}${SIGN_UP}`);
    console.log(response.data);
    return response.data;
  });
};

// export const logout = async (token) => {
//   const data = {
//     createdAt: '2021-12-23T05:19:51.587Z',
//     modifiedAt: '2021-12-23T05:19:51.587Z',
//     accountId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//     userName: 'string',
//     password: pass,
//     phoneNumber: phone,
//     avatarUrl: 'string',
//   };
//   return await axios({
//     method: 'POST',
//     url: `${URL}${LOGIN}`,
//     data,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => {
//     // console.log('URL: ', `${URL}${SIGN_UP}`);
//     console.log(response.data);
//     return response.data;
//   });
// };
