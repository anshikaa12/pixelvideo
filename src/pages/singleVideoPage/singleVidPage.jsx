import React from "react";
import { Footer, Nav, Sidebar } from "../../components";
import ReactPlayer from "react-player";
import { useSingleVidContext } from "../../context/singleVidContext";
import { useLikedVideoContext } from "../../context/likedVideoContext";
import { useWatchLaterContext } from "../../context/watchLaterContext";
import { useState } from "react";
import { usePlaylistContext } from "../../context/playlistContext";
import { v4 as uuid } from "uuid";

function SingleVidPage() {
  const { singleVidState } = useSingleVidContext();
  const { likedVideoState, likedVideoDispatch } = useLikedVideoContext();
  const { watchLaterState, watchLaterDispatch } = useWatchLaterContext();
  const [playlistToggle, setPlaylistToggle] = useState(false);
  const [playlistInputToggle, setPlaylistInputToggle] = useState(false);
  const [playlistInput, setPlaylistInput] = useState("");
  const { playlistState, playlistDispatch } = usePlaylistContext();
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

  function playlistToggleHandler() {
    setPlaylistToggle(!playlistToggle);
  }

  function playlistInputToggleHandler() {
    setPlaylistInputToggle(!playlistInputToggle);
  }

  function playlistInputHandler(e) {
    setPlaylistInput(e.target.value);
  }
  function addToPlaylist(vid) {
    let playlistObj = {
      title: playlistInput,
      videos: [],
      id: uuid(),
    };
    playlistObj.videos.push(vid);
    playlistDispatch({ type: "CREATE_PLAYLIST", payload: playlistObj });
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
                playing
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
              {/* action-btn */}
              <div className="playlist-icon-container">
                <i
                  className="fas fa-folder-plus playlist-icon"
                  onClick={playlistToggleHandler}
                ></i>
                <div
                  className={
                    playlistToggle === false
                      ? "playlist-action-hide"
                      : "playlist-action-container"
                  }
                >
                  <ul className="action-btn-list flex-col">
                    {playlistState.playlistList.map((item) => {
                      return (
                        <li
                          className="action-btn-item"
                          onClick={() => {
                            playlistDispatch({
                              type: "UPDATE_EXISTING_PLAYLIST",
                              payload: {
                                name: item.title,
                                vid: singleVidState.vidItem,
                              },
                            });
                            playlistToggleHandler();
                            playlistInputToggleHandler();
                          }}
                        >
                          <i className="fas fa-plus-circle h5-text"></i>
                          <span className="h5-text">{item.title}</span>
                        </li>
                      );
                    })}

                    <input
                      type="text"
                      className={
                        playlistInputToggle === false
                          ? "hidden-class"
                          : "input-box input-s"
                      }
                      onChange={playlistInputHandler}
                    />
                    <button
                      className={
                        playlistInputToggle === false
                          ? "hidden-class"
                          : "small-btn btn-primary playlist-add-btn"
                      }
                      onClick={() => {
                        addToPlaylist(singleVidState.vidItem);
                        playlistToggleHandler();
                        playlistInputToggleHandler();
                      }}
                    >
                      Add
                    </button>
                    <li
                      className="action-btn-item"
                      onClick={playlistInputToggleHandler}
                    >
                      <i className="fas fa-plus-circle h5-text"></i>
                      <span className="h5-text">add new playlist</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                className="avatar-circle avatar-small"
                alt="texts"
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
