import React from 'react';
import { VideoPlayer } from '../../components';
import '../../styles/videos.css';


const Videos = ({ id, title, description, handleNavigation }) => {
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
        {/* <img src={MoreIcon} className="sip-menu-icon" alt="Sip" /> */}
      </div>
    </div>
  );
};

export default Videos;
