import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

var BaseAPIConfig = axios.create({
  baseURL: 'http://hieunv183534-001-site1.gtempurl.com/api/',
});

export const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: AsyncStorage.getItem('token'),
  },
};

export const formHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: AsyncStorage.getItem('token'),
  },
};

export default BaseAPIConfig;
