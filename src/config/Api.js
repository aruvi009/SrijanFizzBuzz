import axios from 'axios';
//var Config = require('Config');

var Config = {
   serverUrl: 'http://localhost:8000',
}

let axios_instance = axios.create({
  baseURL: Config.serverUrl,
  data: {}
});

// Add a request interceptor
axios_instance.interceptors.request.use(async function (config) {
  try {
    document.body.classList.add('loading-indicator');
    return config;
  } catch (error) {
  }
}, function (error) {
});


export default axios_instance;

export const ROOT_URL = Config.serverUrl;
const withServerKey = url => `${ROOT_URL}${url}`;

// System Environments
export const getFizzBuzzUrl = (count) => withServerKey(`/printFizzBizz/${count}`);

// Common Methods
export const isEmpty = (data) => {
  return Object.keys(data).length === 0 ? true : false
}
