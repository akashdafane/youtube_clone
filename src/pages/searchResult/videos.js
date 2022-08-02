import React from 'react';
import { VideoPlayer, Popover } from '../../components';
import { WatchLaterData } from '../../actions/watchLater';
import { useSetPopover } from '../../hooks/useSetPopover';
import { addHistory } from '../../actions/addHistory';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';
import '../../styles/videos.css';

const Videos = ({ id, title, description, watchLaterLabel }) => {
  const { handleToggle, ref, target, show, handleNavigate, handleClick } =
    useSetPopover(WatchLaterData(id, title), addHistory(id, title));

  return (
    <div>
      <div className="vid-card" onClick={() => handleClick(id)}>
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
        listItemName={watchLaterLabel}
      />
    </div>
  );
};

export default Videos;
