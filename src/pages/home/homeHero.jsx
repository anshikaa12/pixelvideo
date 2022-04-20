import React from "react";

function HomeHero() {
  return (
    <div className="hero-sec">
      <img
        src="https://res.cloudinary.com/de5it79dw/image/upload/v1650395441/cover_qi0ras.jpg"
        alt="card"
      />
      <div className="overlay"></div>
      <div className="hero-text flex-col-center">
        <h1 className="main-h1">Welcome To PixelVideo</h1>
        <h2 className="main-h2">Explore the top videos in the tech world!</h2>
        <button className="btn btn-accent-outline">Explore</button>
      </div>
    </div>
  );
}

export default HomeHero;
