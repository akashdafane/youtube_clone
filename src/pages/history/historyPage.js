import React from 'react';
import { useSelector } from 'react-redux';
import { VideoPlayer } from '../../components/index';

const HistoryPage = () => {
  const items = useSelector((state) => state?.chanelId?.chanelId || []);

  console.log('items', items.data);

  return (
    <div>
      <VideoPlayer />
      {items &&
        items.map((v) => (
          <VideoPlayer src={`https://www.youtube.com/embed/${v.data.id}`} />
        ))}
    </div>
  );
};

export default HistoryPage;
