import React from "react";
import Products from "./Products";
import MyCarousel from "./Carousal";

function Home() {
  return (
    <div className="hero">
      <MyCarousel />
      <Products />
    </div>
  );
}

export default Home;
