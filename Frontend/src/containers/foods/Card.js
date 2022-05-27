import React from "react";

import "./foods.css";
import Slider from "react-slick";

const Card = ({ item }) => {
  let customSettings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // rows: 2,
    // slidesToShow: 3,
    // slidesToScroll: 3
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows:2
        }
      }
    ]
};
  
  return (
    <>
        <div className="restaurantitem-container">
        <Slider {...customSettings}>
          {item.map((Val) => {
            return (
              <div className="card-container " key={Val.id}>
                <div className="restaurant-image">
                  <img src={Val.img} alt={Val.title}/>
                </div>

                <div className="restaurant-content">
                  <div className="restaurant-name">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="restaurant-address">{Val.desc}</div>
                </div>

              </div>

            );
          })}
                  </Slider>



      </div>

    </>
  );
};

export default Card;