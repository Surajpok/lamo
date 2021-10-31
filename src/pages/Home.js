import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
const home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default home;