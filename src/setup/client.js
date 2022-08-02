import axios from 'axios';
const KEY = 'AIzaSyDRv_yfzl_jtNZhphEF_w6QIfHUrIRwOU0';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});

export default client;
