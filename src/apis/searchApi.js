import client from '../setup/client';

export const getSearchResults = (body) => {
  return client.get('/search', {
    params: {
      q: body,
    },
  });
};

// let url = 'https://youtube.googleapis.com/youtube/v3/search'

export const getListResult = () => {
  return client.get('/search');
}