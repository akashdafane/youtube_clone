import React from 'react';
import HistoryVideoList from './historyVideoList';
import { useSelector } from 'react-redux';
import { MoreVertIcon, DeleteOutlineIcon } from '../../constants/iconConstants';
import '../../styles/videos.css';

const HistoryPage = () => {
  const items = useSelector((state) => state?.historyData?.historyData || []);

  return (
    <div>
      {items && items?.length > 0 &&
        items.map((value) => (
          <HistoryVideoList
            id={value?.data?.id}
            title={value?.data?.title}
            icon={<MoreVertIcon />}
            listIcon={<DeleteOutlineIcon />}
            listItemName={'Watch Later'}
          />
        ))}
    </div>
  );
};

export default HistoryPage;
