import React, { useState, useRef } from 'react';
import { VideoPlayer, Popover } from '../../components';
import { useDispatch } from 'react-redux';
import { WatchLaterData } from '../../actions/watchLater';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';
import '../../styles/videos.css';

const Videos = ({ id, title, description, handleNavigation }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const dispatch = useDispatch();

  const handleToggle = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleNavigate = (id) => {
    setShow(false);
    dispatch(WatchLaterData(id, title));
  };
  return (
    <div>
      <div className="vid-card" onClick={() => handleNavigation(id)}>
        <VideoPlayer
          className="img"
          src={`https://www.youtube.com/embed/${id}`}
          title={id}
          allowFullScreen={true}
        />
        <div className="title">
          {title}
          <div className="sub-title"> 27M views 1 year ago</div>
          <div className="text">{description}</div>
        </div>
      </div>
      <Popover
        handleToggle={handleToggle}
        show={show}
        target={target}
        ref={ref}
        handleNavigate={() => handleNavigate(id)}
        icon={<MoreVertIcon />}
        listIcon={<WatchLaterOutlinedIcon />}
        listItemName={'Watch Later'}
      />
    </div>
  );
};

export default Videos;
