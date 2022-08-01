import React, { useState, useRef } from 'react';
import { VideoPlayer, Popover } from '../../components';
import {
  MoreVertIcon,
  DeleteOutlineIcon
} from '../../constants/iconConstants';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WatchLaterVideoList from './watchLaterVideoList';
import { useDispatch } from 'react-redux';
import { removeWatchLater } from '../../actions/watchLater';

import '../../styles/videos.css';

const WatchLaterPage = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [data, setData] = useState('');
  const ref = useRef();

  const dispatch = useDispatch();

  const handleToggle = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleNavigate = (d) => {
    // dispatch(removeWatchLater(id));
    setShow(false);
    // dispatch(WatchLaterData(id, title, channel));
  };

  const items = useSelector(
    (state) => state?.watchLaterData?.watchLaterData || [],
  );


  let navigate = useNavigate();

  const handleNavigation = (id) => {
    setData(id)
    navigate(`/watch/${id}`);
  };

  return (
    <div>
      {items &&
        items.map((value) => (
          <WatchLaterVideoList
            id={value?.data?.id}
            title={value?.data?.title}
            handleNavigation={handleNavigation}
            // handleToggle={handleToggle}
            // show={show}
            // target={target}
            // ref={ref}
            // handleNavigate={handleNavigate}
            icon={<MoreVertIcon />}
            listIcon={<DeleteOutlineIcon />}
            listItemName={'Watch Later'}
          />
          // <div>
          //   <div className="vid-card" onClick={() => handleNavigation(value?.data?.id)}>
          //     <VideoPlayer
          //       className="img"
          //       src={`https://www.youtube.com/embed/${value?.data?.id}`}
          //       title={value?.data?.id}
          //       allowFullScreen={true}
          //     />
          //     <div className="title">
          //       {value?.data?.title}
          //       <div className="sub-title"> 27M views 1 year ago</div>
          //       <div className="text">{'description'}</div>
          //     </div>
          //     {/* <img src={MoreIcon} className="sip-menu-icon" alt="Sip" /> */}
          //   </div>
          //   <Popover
          //     handleToggle={handleToggle}
          //     show={show}
          //     target={target}
          //     ref={ref}
          //     handleNavigate={() =>handleNavigate(value?.data?.id)}
          //     icon={<MoreVertIcon />}
          //     listIcon={<WatchLaterOutlinedIcon />}
          //     listItemName={'Remove Item'}
          //   />
          // </div>
        ))}
    </div>
  );
};

export default WatchLaterPage;
