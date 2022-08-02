import React, { useEffect, useState } from 'react';
import { constants } from '../../constants/constants';
import { getListResult } from '../../apis/searchApi';
import { Col } from 'react-bootstrap';
import VideoCard from './videoCardPage';
import '../../styles/homePage.css';

const Home = () => {
  const [data, setData] = useState({});

  const { popover } = constants || {};
  const { watchLaterLabel } = popover || {};

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    getListResult().then((res) => {
      setData(res?.data?.items);
    });
  };

  return (
    <div className="MainVideoDashBoard">
      <div className="MainVideoDashBoard_videos row">
        {data &&
          data?.length > 0 &&
          data.map((value, index) => (
            <Col md="2" key={index}>
              <VideoCard
                title={value?.snippet?.channelTitle}
                id={value?.id?.videoId}
                description={value?.snippet?.description}
                views="5.5M Views"
                timestamp={value?.snippet?.publishTime}
                image={value?.snippet?.thumbnails?.medium?.url}
                watchLaterLabel={watchLaterLabel}
                channel="demo"
              />
            </Col>
          ))}
      </div>
    </div>
  );
};

export default Home;
