import React from 'react';
import '../../styles/homePage.css';
import VideoCard from '../videoCard/videoCardPage';
// import { getSearchApi } from '../../apis/search';
// import Axios from 'axios';
import { items } from '../../constants/fackApi';
import { Col } from 'react-bootstrap';

import { AddChanelId } from '../../actions/addHistory';
import { WatchLaterData } from '../../actions/watchLater';

import { Popover } from '../../components';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';

const Home = () => {
  // const { handleClick, handleClose, id, open, anchorEl } = useSetPopovers();
  // WatchLaterData(id, title, channel),
  // AddChanelId(id, title, channel),
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
          items.map((value, index) => (
            <Col md="2" key={index}>
              <VideoCard
                title={value?.snippet?.channelTitle}
                id={value?.id?.videoId}
                views="5.5M Views"
                timestamp={value?.snippet?.publishTime}
                image={value?.snippet?.thumbnails?.medium?.url}
                channel="demo"
              />
              {/* <Popover
                  handleToggle={handleToggle}
                  show={show}
                  target={target}
                  ref={ref}
                  handleNavigate={() => handleNavigate(value?.id?.videoId)}
                  icon={<MoreVertIcon />}
                  listIcon={<WatchLaterOutlinedIcon />}
                  listItemName={'Watch Later'}
                /> */}
            </Col>
          ))}
      </div>
    </div>
  );
};

export default Home;
