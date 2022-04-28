import React from "react";
import { Footer, Nav, Sidebar } from "../../components";
import ReactPlayer from "react-player";
import { useSingleVidContext } from "../../context/singleVidContext";
import { useLikedVideoContext } from "../../context/likedVideoContext";
import { useWatchLaterContext } from "../../context/watchLaterContext";
import { useState } from "react";

function SingleVidPage() {
  const { singleVidState } = useSingleVidContext();
  const { likedVideoState, likedVideoDispatch } = useLikedVideoContext();
  const { watchLaterState, watchLaterDispatch } = useWatchLaterContext();

  function watchLaterToggle(item) {
    if (
      watchLaterState.watchLaterList.find((vid) => vid._id === item._id) !==
      undefined
    ) {
      return watchLaterDispatch({
        type: "REMOVE_LATER_VIDEO",
        payload: singleVidState.vidItem._id,
      });
    } else {
      return watchLaterDispatch({
        type: "ADD_LATER_VIDEO",
        payload: singleVidState.vidItem,
      });
    }
  }

  function likeToggle(item) {
    if (
      likedVideoState.likedVidList.find((vid) => vid._id === item._id) !==
      undefined
    ) {
      return likedVideoDispatch({
        type: "REMOVE_LIKED_VIDEO",
        payload: singleVidState.vidItem._id,
      });
    } else {
      return likedVideoDispatch({
        type: "ADD_LIKED_VIDEO",
        payload: singleVidState.vidItem,
      });
    }
  }

  return (
    <div>
      <Nav />
      <div className="single-vid-sec flex-row">
        <Sidebar />
        <div className="single-vid-wrapper">
          <div className="player-wrapper">
            <div className="player">
              <ReactPlayer
                url={singleVidState.vidItem.url}
                playing="true"
                light={singleVidState.vidItem.thumbnail}
                width="100%"
                height="100%"
              />
            </div>
            <div className="vid-content">
              <p className="foot-p prime-color-text">
                #{singleVidState.vidItem.categoryName}
              </p>
              <h3 className="h3-text">{singleVidState.vidItem.title}</h3>
              <p className="h4-text md-wt">
                {singleVidState.vidItem.description}
              </p>
            </div>
            <div className="action-vid-btn">
              <i
                className={
                  likedVideoState.likedVidList.find(
                    (vid) => vid._id === singleVidState.vidItem._id
                  ) !== undefined
                    ? "fas fa-thumbs-up clicked"
                    : "fas fa-thumbs-up not-clicked"
                }
                onClick={() => likeToggle(singleVidState.vidItem)}
              ></i>
              <i className="fas fa-edit"></i>
              <i className="fas fa-folder-plus"></i>
              <i
                className={
                  watchLaterState.watchLaterList.find(
                    (vid) => vid._id === singleVidState.vidItem._id
                  ) !== undefined
                    ? "fas fa-bookmark clicked"
                    : "fas fa-bookmark not-clicked"
                }
                onClick={() => watchLaterToggle(singleVidState.vidItem)}
              ></i>
              <i className="fas fa-share-alt"></i>
            </div>
            <hr />
            <div className="channel flex-row">
              <img
                src={singleVidState.vidItem.channelImage}
                class="avatar-circle avatar-small"
              />
              <p className="h5-text">{singleVidState.vidItem.channelName}</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleVidPage;
