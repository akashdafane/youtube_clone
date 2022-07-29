import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddChanelId } from '../../actions/addHistory';
import { useNavigate } from 'react-router-dom';
import { Popover } from '../../components';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';

const VideoCardPage = ({ image, title, channel, views, timestamp, id }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleToggle = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleNavigate = (id) => {
    console.log('id', id);
    setShow(false);
  };

  const handleClicks = (id) => {
    navigate(`/watch/${id}`);
    dispatch(AddChanelId(id, title, channel));
  };

  return (
    <div>
      <div className="videoCard" onClick={() => handleClicks(id)}>
        <img className="VideoCard_image" src={image} alt="" />
        <div className="videoCard_info">
          <div className="videoCard_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} . {timestamp}
            </p>
          </div>
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

export default VideoCardPage;
