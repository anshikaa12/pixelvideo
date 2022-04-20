import React from "react";
import { useVideo } from "../../services/videosApi";

function VideoListCard() {
  const { cardData } = useVideo();
  return cardData.map((item) => {
    return (
      <div className="basic-card">
        <img src={item.thumbnail} className="card-img" />
        <div className="card-body">
          <div className="flex-row vid-title">
            <h4 className="card-title">{item.title}</h4>
            <i className="fas fa-ellipsis-v card-icon"></i>
          </div>
          <div className="flex-col">
            <span className="card-subtext">By {item.channelName}</span>
            <span className="card-subtext">{item.categoryName}</span>
          </div>
        </div>
      </div>
    );
  });
}

export default VideoListCard;
