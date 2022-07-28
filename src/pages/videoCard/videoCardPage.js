import React from 'react';
import { useDispatch } from 'react-redux';
import { AddChanelId } from "../../actions/addHistory";
import { useNavigate } from 'react-router-dom';


const VideoCardPage = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  id,
}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/watch/${id}`);
     dispatch(AddChanelId(id))
  };

  return (
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
  );
};

export default VideoCardPage;
