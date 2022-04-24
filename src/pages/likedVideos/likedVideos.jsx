import React from "react";
import { Footer, Nav, Sidebar } from "../../components";
import { useLikedVideoContext } from "../../context/likedVideoContext";

function LikedVideos() {
  const { likedVideoState, likedVideoDispatch } = useLikedVideoContext();
  return (
    <div>
      <Nav />
      <div className="flex-row liked-videos">
        <Sidebar />
        <div className="liked-videos-sec grid-30-70">
          <div className="liked-sec-img flex-col">
            <img
              className="img-fluid-resp"
              src="https://res.cloudinary.com/de5it79dw/image/upload/v1650721311/pexels-designecologist-1779487_nseqr8.jpg"
              alt="text"
            />
            <h3 className="main-h3">Liked Videos</h3>
            <h5 className="main-h5">
              {likedVideoState.likedVidList.length} Videos
            </h5>
          </div>
          <div className="liked-sec-list">
            {likedVideoState.likedVidList.map((vid) => {
              return (
                <div className="basic-card liked-basic-card">
                  <div className="card-header">
                    <img
                      className="card-img-header liked-card-img card-img"
                      src={vid.thumbnail}
                    />
                    <div className="header-text">
                      <div className="liked-card-head flex-row">
                        <h4 className="card-title">{vid.title}</h4>
                        <i
                          className="fas fa-trash-alt card-icon"
                          onClick={() => {
                            likedVideoDispatch({
                              type: "REMOVE_LIKED_VIDEO",
                              payload: vid._id,
                            });
                          }}
                        ></i>
                      </div>
                      <span className="card-subtext">{vid.channelName}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LikedVideos;
