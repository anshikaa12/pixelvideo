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
} from "./pages";

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
      </Routes>
    </div>
  );
}

export default App;
