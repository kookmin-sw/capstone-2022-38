import React from 'react';
import './restaurant.css';

const Restaurant = ({ imgUrl, text, location }) => (
  <div className="restaurant-container">
    <div className="restaurant-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="restaurant-content">
        <h4>{text}</h4>
        <p>{location}</p>
    </div>
  </div>
);

export default Restaurant;
