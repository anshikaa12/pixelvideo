import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Nav, Footer, Sidebar } from "../../components";
import { usePlaylistContext } from "../../context/playlistContext";

function SinglePlaylistPage() {
  const { playlistState, playlistDispatch } = usePlaylistContext();
  const { playlistid } = useParams();
  const currentPlaylist = playlistState.playlistList.find(
    (item) => item.id === playlistid
  );
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/playlist`;
    navigate(path);
  };
  return (
    currentPlaylist && (
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
              <h3 className="main-h3">{currentPlaylist.title}</h3>
              <h5 className="main-h5">
                {currentPlaylist.videos.length} Videos
              </h5>
              <i
                className="fas fa-trash-alt main-h5 del-icon"
                onClick={() => {
                  playlistDispatch({
                    type: "DELETE_PLAYLIST",
                    payload: currentPlaylist.id,
                  });
                  routeChange();
                }}
              ></i>
            </div>
            <div className="liked-sec-list">
              {currentPlaylist.videos.map((vid) => {
                return (
                  <div className="basic-card liked-basic-card">
                    <div className="card-header">
                      <img
                        className="card-img-header liked-card-img card-img"
                        src={vid.thumbnail}
                        alt="textcard"
                      />
                      <div className="header-text">
                        <div className="liked-card-head flex-row">
                          <h4 className="card-title">{vid.title}</h4>
                          <i
                            className="fas fa-trash-alt card-icon"
                            onClick={() =>
                              playlistDispatch({
                                type: "REMOVE_FROM_PLAYLIST",
                                payload: {
                                  name: currentPlaylist.title,
                                  vidItem: vid._id,
                                },
                              })
                            }
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
    )
  );
}

export default SinglePlaylistPage;
