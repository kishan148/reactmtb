import React from "react";
import Topnavbar from "./Topnavbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="overlay" style={{display: 'none'}}></div>
      <Topnavbar />
      <Navbar />
    </>
  );
};

export default Header;