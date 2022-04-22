import React from "react";
import { useCategory } from "../../services/categoriesApi";

import VideoListCard from "./videoListCard";

function Video() {
  const { category } = useCategory();
  return (
    <div className="video-sec">
      <div className="category-tag-container">
        <div className="chip h5-text">All</div>
        {/* {category.map((item) => {
          return (
            <div key={item.categoryName} className="chip h5-text">
              {item.categoryName}
            </div>
          );
        })} */}
      </div>
      <div className="video-list column-3-grid">
        <VideoListCard />
      </div>
    </div>
  );
}

export default Video;
