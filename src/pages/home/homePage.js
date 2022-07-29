import React from 'react';
import '../../styles/homePage.css';
import VideoCard from '../videoCard/videoCardPage';
// import { getSearchApi } from '../../apis/search';
// import Axios from 'axios';
import { items } from '../../constants/fackApi';
import { Col } from 'react-bootstrap';

const Home = () => {
  // const [data, setData] = useState({})

  // useEffect(() => {
  //   getApiData()
  // },[])

  // let url = 'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDRv_yfzl_jtNZhphEF_w6QIfHUrIRwOU0&part=snippet&maxResults=50'

  // const getApiData = () => {
  //   Axios.get(url)
  //   .then((res) => {
  //     setData(res?.data?.items)
  //   })
  // }

  return (
    <div className="MainVideoDashBoard">
      <div className="MainVideoDashBoard_videos row">
        {items &&
          items?.length > 0 &&
          items.map((value) => (
            <Col md="2">
              <VideoCard
                title={value?.snippet?.channelTitle}
                id={value?.id?.videoId}
                views="5.5M Views"
                timestamp={value?.snippet?.publishTime}
                image={value?.snippet?.thumbnails?.medium?.url}
                channel="demo"
              />
            </Col>
          ))}
      </div>
    </div>
  );
};

export default Home;
