import React from 'react';
import videoFile from '../video/video.mp4';

const Main: React.FC = () => {
  return (
    <section className="main">
      <div className="main_inner">
        <div className="main_video">
            <video src={videoFile} autoPlay muted loop />
        </div>
      </div>
    </section>
  );
};

export default Main;
