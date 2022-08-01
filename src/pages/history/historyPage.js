import React from 'react';
import HistoryVideoList from './historyVideoList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  MoreVertIcon,
  DeleteOutlineIcon
} from '../../constants/iconConstants';
import '../../styles/videos.css';

const HistoryPage = () => {
  const items = useSelector((state) => state?.chanelId?.chanelId || []);

  let navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div>
      {items &&
        items.map((value) => (
          <HistoryVideoList
            id={value?.data?.id}
            title={value?.data?.title}
            handleNavigation={handleNavigation}
            icon={<MoreVertIcon />}
            listIcon={<DeleteOutlineIcon />}
            listItemName={'Watch Later'}
          />
        ))}
    </div>
  );
};

export default HistoryPage;
