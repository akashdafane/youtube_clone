import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../../components/index';
// import { useDispatch } from 'react-redux';
// import { AddChanelId } from '../../actions/addHistory';

const WatchVideoPage = () => {
  let { id } = useParams();
  // const dispatch = useDispatch();

  // console.log('first')

  // useEffect(() => {
  //   dispatch(AddChanelId(id));
  // }, []);
  return (
    <div>
      <VideoPlayer
        width={'1220'}
        height={'680'}
        src={`https://www.youtube.com/embed/${id}`}
        title={id}
        allowFullScreen={true}
      />
    </div>
  );
};

export default WatchVideoPage;
