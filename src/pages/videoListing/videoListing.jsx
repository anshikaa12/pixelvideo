import React from "react";
import { Nav, Footer, Sidebar } from "../../components";
import Video from "./video";
function VideoListing() {
  return (
    <div className="videos">
      <Nav />
      <div className="main-sec flex-row">
        <Sidebar />
        <Video />
      </div>
      <Footer />
    </div>
  );
}

export default VideoListing;
