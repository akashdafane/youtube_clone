import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../../components/index';

const WatchVideoPage = () => {
  let { id } = useParams();
  return (
    <div>
      <VideoPlayer
        width={'1220'}
        height={'680'}
        src={`https://www.youtube.com/embed/${id}`}
      />
    </div>
  );
};

export default WatchVideoPage;
