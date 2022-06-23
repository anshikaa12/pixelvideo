import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  VideoListing,
  LikedVideos,
  WatchLaterVid,
  History,
  SignUp,
  Login,
  SingleVidPage,
  Playlist
} from "./pages";
import SinglePlaylistPage from "./pages/playlist/singlePlaylistPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlatervideos" element={<WatchLaterVid />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singlevid" element={<SingleVidPage />} />
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/playlist/:playlistid" element={<SinglePlaylistPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
