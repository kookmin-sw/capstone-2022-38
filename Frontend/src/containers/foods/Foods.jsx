import React from "react";
import Whole from "./Whole";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./foods.css";


function Foods() {
return (
  <div className="foodsearch">
    <div className="foodsearch-container section__padding glass" id="blog">
      
      <div className="foodsearch-heading">
        <h1 className="gradient__text">Restaurant Search</h1>
      </div>   
          <Whole/>
    </div>
    </div>
);
}

export default Foods;