import React from 'react';

const VideoPlayer = ({ width, height, src, title, allowFullScreen, className, onClick }) => {
  return (
    <div className={className}>
      <iframe onClick={onClick} width={width} height={height} src={src} title={title} allowFullScreen={allowFullScreen}/>
    </div>
  );
};

export default VideoPlayer;
