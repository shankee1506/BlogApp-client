import React from "react";
import './Home.css'
import LeftBar from "../../components/LeftBar/LeftBar";
import NavBar from "../../components/NavBar/NavBar";
import RightBar from "../../components/RightBar/RightBar";
import MainPost from "../../components/MainPost/MainPost";

const Home = () => {
  return (
      <div className="home">
          
      <div className="ComponentContainer">
              <LeftBar />
              <MainPost />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
