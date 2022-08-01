import React from 'react';
import { VideoPlayer, Popover } from '../../components';
import { removeHistory } from '../../actions/addHistory';
import { useSetPopover } from '../../hooks/useSetPopover';
import '../../styles/videos.css';

const HistoryVideoList = ({ id, title, handleNavigation, icon, listIcon }) => {
  const { handleToggle, ref, target, show, handleNavigate } = useSetPopover(
    removeHistory(id),
  );
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

export default HistoryVideoList;
