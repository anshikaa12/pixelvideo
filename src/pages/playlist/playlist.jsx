import React from "react";
import { Nav, Sidebar } from "../../components";
import { usePlaylistContext } from "../../context/playlistContext";
import { useNavigate } from "react-router-dom";
function Playlist() {
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/playlist/${id}`;
    navigate(path);
  };
  const { playlistState } = usePlaylistContext();

  return (
    <div>
      <Nav />
      <div className="playlist-container flex-row">
        <Sidebar />
        <div className="playlist-sec column-3-grid">
          {playlistState.playlistList.length > 0 ? (
            playlistState.playlistList.map((item) => {
              return (
                <div
                  className="playlist-box flex-col-center"
                  key={item._id}
                  onClick={() => {
                    routeChange(item.id);
                  }}
                >
                  <h3 className="main-h3 playlist-name">{item.title}</h3>
                </div>
              );
            })
          ) : (
            <h3 className="main-h3">No Playlists created yet!</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
