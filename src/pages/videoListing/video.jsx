import React from "react";

import VideoListCard from "./videoListCard";

function Video() {
  return (
    <div className="video-sec">
      <div className="category-tag-container">
        <div className="chip h5-text">All</div>
        <div className="chip h5-text">Phones</div>
        <div className="chip h5-text">Laptops</div>
        <div className="chip h5-text">Tech News</div>
        <div className="chip h5-text">Tech conspiracy</div>
      </div>
      <div className="video-list column-3-grid">
        <VideoListCard />
      </div>
    </div>
  );
}

export default Video;
