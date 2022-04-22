import React from "react";
import { useMobileView } from "../../context/mobileViewContext";
import { useVideo } from "../../services/videosApi";

function VideoListCard() {
  const { toggleState, toggleDispatch } = useMobileView();

  return (
    toggleState.actionBtnContainer.length > 0 &&
    toggleState.actionBtnContainer.map((item) => {
      return (
        <div key={item._id} className="basic-card">
          <img src={item.thumbnail} className="card-img" />
          <div className="card-body">
            <div className="flex-row vid-title">
              <h4 className="card-title">{item.title}</h4>
              <div className="action-btn-box">
                <i
                  className="fas fa-ellipsis-v card-icon action-btn"
                  onClick={() =>
                    toggleDispatch({ type: "ACTION_BTN", payload: item._id })
                  }
                ></i>
                <div
                  className={
                    item.actionContainer === false
                      ? " action-btn-container-hide"
                      : "action-btn-container action-btn-container-show"
                  }
                >
                  <ul className="action-btn-list flex-col">
                    <li className="action-btn-item">
                      <i className="fas fa-plus-circle h5-text"></i>
                      <span className="h5-text">Watch Later</span>
                    </li>
                    <li className="action-btn-item">
                      <i className="fas fa-plus-circle h5-text"></i>
                      <span className="h5-text">Liked Videos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-col">
              <span className="card-subtext">By {item.channelName}</span>
              <span className="card-subtext">{item.categoryName}</span>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default VideoListCard;
