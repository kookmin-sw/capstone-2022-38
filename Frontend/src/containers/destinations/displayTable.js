import React from "react";
import "./destination.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class DisplayTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  DisplayItems = (props) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      rows: 2,
      slidesToShow: 3,
      slidesToScroll: 3
      
    };

    const parks = this.props.displayedParks;

      
  return (
    <>
        <div className="restaurantitem-container">
        <Slider {...settings}>
          {parks.map((Val) => {
            return (
              <div className="card-container" key={Val.id}>
                <div className="dest-image">
                  <img  src={Val.Image} alt={Val.Name}/>
                </div>

                <div className="dest-content">
                  <div className="dest-name">
                    {Val.Name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  
                  <div className="dest-address">{Val.desc}</div>
                </div>

              </div>

            );
          })}
                  </Slider>



      </div>

    </>
  );
};



  render() {
  
    var displayitmes = this.DisplayItems();
    return (
      <div className="map-container">{displayitmes}</div>

      // <div classname = "object-wrapper">
      //   {/* <h2 className={"Text"}>Selected Parks</h2> */}
      //   {displayitmes}
      // </div>
    );
  }
}