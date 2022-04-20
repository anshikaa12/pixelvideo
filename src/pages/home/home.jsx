import React from "react";
import { Nav, Footer } from "../../components";
import { useCategory } from "../../services/categoriesApi";
import HomeHero from "./homeHero";
import TrendingVideo from "./trendingVideo";
function Home() {
  return (
    <div className="home">
      <Nav />
      <HomeHero />
      <TrendingVideo />
      <Footer />
    </div>
  );
}

export default Home;
