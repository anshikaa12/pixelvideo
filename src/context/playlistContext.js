import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer";

const playlistContext = createContext();
const usePlaylistContext = () => useContext(playlistContext);
const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlistList: [],
  });
  return (
    <playlistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </playlistContext.Provider>
  );
};
export { usePlaylistContext, PlaylistProvider };
