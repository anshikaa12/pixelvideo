import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, VideoListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting" element={<VideoListing />} />
      </Routes>
    </div>
  );
}

export default App;
