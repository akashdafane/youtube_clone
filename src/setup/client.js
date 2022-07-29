import axios from 'axios';
const KEY = 'AIzaSyDRv_yfzl_jtNZhphEF_w6QIfHUrIRwOU0';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params:{
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});

// const get = (url, body) =>
//   client.get(url, { params: body, });

// const post = (url, body, headers = {}) => client.post(url, body, { headers });

// const put = (url, body, headers = {}) => client.put(url, body, { headers });

// const patch = (url, body, headers = {}) => client.patch(url, body, { headers });

// const del = (url, body, headers = {}) => client.delete(url, body, { headers });


// export { get, post, put, del, patch };

export default client;
