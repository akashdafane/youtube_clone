import React from 'react';
import { MoreVertIcon, DeleteOutlineIcon } from '../../constants/iconConstants';
import { useSelector } from 'react-redux';
import WatchLaterVideoList from './watchLaterVideoList';
import '../../styles/videos.css';

const WatchLaterPage = () => {
  const items = useSelector(
    (state) => state?.watchLaterData?.watchLaterData || [],
  );

  console.log('items', items)

  return (
    <div>
      {items &&
        items.map((value) => (
          <WatchLaterVideoList
            id={value?.data?.id}
            title={value?.data?.title}
            description={value?.data?.description}
            icon={<MoreVertIcon />}
            listIcon={<DeleteOutlineIcon />}
            listItemName={'Watch Later'}
          />
          // <div>
          //   <div className="vid-card" onClick={() => handleNavigation(value?.data?.id)}>
          //     <VideoPlayer
          //       className="img"
          //       src={`https://www.youtube.com/embed/${value?.data?.id}`}
          //       title={value?.data?.id}
          //       allowFullScreen={true}
          //     />
          //     <div className="title">
          //       {value?.data?.title}
          //       <div className="sub-title"> 27M views 1 year ago</div>
          //       <div className="text">{'description'}</div>
          //     </div>
          //     {/* <img src={MoreIcon} className="sip-menu-icon" alt="Sip" /> */}
          //   </div>
          //   <Popover
          //     handleToggle={handleToggle}
          //     show={show}
          //     target={target}
          //     ref={ref}
          //     handleNavigate={() =>handleNavigate(value?.data?.id)}
          //     icon={<MoreVertIcon />}
          //     listIcon={<WatchLaterOutlinedIcon />}
          //     listItemName={'Remove Item'}
          //   />
          // </div>
        ))}
    </div>
  );
};

export default WatchLaterPage;
