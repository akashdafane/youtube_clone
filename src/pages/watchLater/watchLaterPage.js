import React from 'react';
import { IncrementCount, DecrementCount } from '../../actions/countAction';
import { useDispatch, useSelector } from 'react-redux';

const WatchLaterPage = () => {
  const count = useSelector((state) => state?.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(IncrementCount())}>
        +
      </button>
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch(DecrementCount())}>
        -
      </button>
    </div>
  );
};

export default WatchLaterPage;
