import React, { useEffect, useState } from 'react';
import '../../styles/homePage.css';
import VideoCard from './videoCardPage';
import { getListResult } from '../../apis/searchApi';
import { items } from '../../constants/fackApi';
import { Col } from 'react-bootstrap';
import { constants } from '../../constants/constants';

const Home = () => {
  // const [data, setData] = useState({});

  const { popover } = constants || {};
  const { watchLaterLabel } = popover || {};

  // useEffect(() => {
  //   getApiData();
  // }, []);

  // const getApiData = () => {
  //   getListResult().then((res) => {
  //     setData(res?.data?.items);
  //   });
  // };

  return (
    <div className="MainVideoDashBoard">
      <div className="MainVideoDashBoard_videos row">
        {items &&
          items?.length > 0 &&
          items.map((value, index) => (
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
