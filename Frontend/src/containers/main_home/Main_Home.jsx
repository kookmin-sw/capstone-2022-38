import React from "react";
import Footer from "../footer/Footer";
import Foods from "../foods/Foods";
import Destination from "../destinations/Destination";
import Downloads from "../downloads/Downloads";
import Header from "../header/Header";


import "./Main_Home.css";


const Home = () => (
  <div className="Main_Home">
  
    <div className="background-img">
      <Header />
      <Downloads />
      <Foods />
      <Destination />
      <Footer />
    </div>
    </div>
  
);

export default Home;
