import axios from 'axios';
const client = axios.create();

client.defaults.baseURL = 'https://api.github.com/';
// client.defaults.headers.common[
//   'Authorization'
// ] = `Your_Key`;

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
export default client;
