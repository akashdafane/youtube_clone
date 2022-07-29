import React, { useState, useRef } from 'react';
import { Popover } from '../../components/index';
import { MoreVertIcon } from '../../constants/iconConstants';

const WatchLaterPage = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleNavigate = () => {
    setShow(false);
  };

  return (
    <div>
      <Popover
        handleClick={handleClick}
        show={show}
        target={target}
        ref={ref}
        handleNavigate={handleNavigate}
        icon={<MoreVertIcon />}
      />
    </div>
  );
};

export default WatchLaterPage;
