import React from 'react';

const Main: React.FC = () => {
  return (
    <section className="main">
      <div className="main_inner">
        <div className="main_video">
          <video src="video/video.mp4" muted autoPlay loop playsInline></video>
        </div>
      </div>
    </section>
  );
};

export default Main;
