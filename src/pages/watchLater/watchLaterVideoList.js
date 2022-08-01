import React, { useState, useRef } from 'react';
import { VideoPlayer, Popover } from '../../components';
import { removeWatchLater } from '../../actions/watchLater';
import { useDispatch } from 'react-redux';
import '../../styles/videos.css';

const WatchLaterVideoList = ({
  id,
  title,
  handleNavigation,
  // handleToggle,
  // ref,
  // target,
  // handleNavigate,
  // show,
  icon,
  listIcon,
}) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const dispatch = useDispatch();

  const handleToggle = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleNavigate = (id) => {
    dispatch(removeWatchLater(id));
    setShow(false);
    // dispatch(WatchLaterData(id, title, channel));
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
          <div className="text">{'description'}</div>
        </div>
        {/* <img src={MoreIcon} className="sip-menu-icon" alt="Sip" /> */}
      </div>
      <Popover
        handleToggle={handleToggle}
        show={show}
        target={target}
        ref={ref}
        handleNavigate={() => handleNavigate(id)}
        icon={icon}
        listIcon={listIcon}
        listItemName={'Remove from Watch Later'}
      />
    </div>
  );
};

export default WatchLaterVideoList;
