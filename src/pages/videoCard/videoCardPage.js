import React from 'react';
import { AddChanelId } from '../../actions/addHistory';
import { WatchLaterData } from '../../actions/watchLater';
import { useSetPopover } from '../../hooks/useSetPopover';
import { Popover } from '../../components';
import {
  MoreVertIcon,
  WatchLaterOutlinedIcon,
} from '../../constants/iconConstants';

const VideoCardPage = ({ image, title, channel, views, timestamp, id }) => {
  const { handleToggle, ref, target, show, handleNavigate, handleClick } =
    useSetPopover(
      WatchLaterData(id, title, channel),
      AddChanelId(id, title, channel),
    );

  return (
    <div>
      <div className="videoCard" onClick={() => handleClick(id)}>
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
