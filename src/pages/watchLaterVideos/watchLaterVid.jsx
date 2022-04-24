import React from "react";
import { Footer, Nav, Sidebar } from "../../components";
import { useWatchLaterContext } from "../../context/watchLaterContext";
function WatchLaterVid() {
  const { watchLaterState, watchLaterDispatch } = useWatchLaterContext();
  return (
    <div>
      <Nav />
      <div className="flex-row later-videos">
        <Sidebar />
        <div className="later-videos-sec grid-30-70">
          <div className="later-sec-img flex-col">
            <img
              className="img-fluid-resp"
              src="https://res.cloudinary.com/de5it79dw/image/upload/v1650721311/pexels-designecologist-1779487_nseqr8.jpg"
              alt="text"
            />
            <h3 className="main-h3">Watch Later Videos</h3>
            <h5 className="main-h5">
              {watchLaterState.watchLaterList.length} Videos
            </h5>
          </div>
          <div className="later-sec-list">
            {watchLaterState.watchLaterList.map((vid) => {
              return (
                <div className="basic-card later-basic-card">
                  <div className="card-header">
                    <img
                      className="card-img-header later-card-img card-img"
                      src={vid.thumbnail}
                    />
                    <div className="header-text">
                      <div className="later-card-head flex-row">
                        <h4 className="card-title">{vid.title}</h4>
                        <i
                          className="fas fa-trash-alt card-icon"
                          onClick={() => {
                            watchLaterDispatch({
                              type: "REMOVE_LATER_VIDEO",
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

export default WatchLaterVid;
