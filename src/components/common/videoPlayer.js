import React from 'react';

const VideoPlayer = ({ width, height, src }) => {
  return (
    <div>
      <iframe width={width} height={height} src={src} />
    </div>
  );
};

export default VideoPlayer;
