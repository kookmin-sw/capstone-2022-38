import React from "react";

import "./foods.css";
import Slider from "react-slick";

const Card = ({ item }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 3
};
  
  return (
    <>
        <div className="restaurantitem-container">
        <Slider {...settings}>
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