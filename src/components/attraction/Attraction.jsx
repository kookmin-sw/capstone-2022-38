import React from 'react';
import './attraction.css';

const Attraction = ({ imgUrl, attName, attCtg }) => (
  <div className="attraction-container">
    <div className="attraction-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="attraction-content">
      <div className="attraction-info">
        <h3>{attName}</h3>
        <p>{attCtg}</p>
      </div>
    </div>
  </div>
);

export default Attraction;
