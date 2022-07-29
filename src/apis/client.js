import axios from 'axios';
const KEY = 'AIzaSyD_ZAsv1Q_RnFyQeNr35nMVI_9JUgIda5U'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})