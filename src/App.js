import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, VideoListing, LikedVideos, WatchLaterVid } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlatervideos" element={<WatchLaterVid />} />
      </Routes>
    </div>
  );
}

export default App;
