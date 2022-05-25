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
      rows: 1,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 3
      
    };

    const parks = this.props.displayedParks;
    console.log(parks);
    const list = parks.map((park) => {
      return (     
        <div className="restaurantitem-container ">
            <Slider {...settings}>
              <div className="container-fluid">
                <div className="map-image">
                  <img id = "img" src={park.Image} />
                  <h3>{park.Name} - {park.Location}</h3>


                  {/* <p>{park.Description}</p>
          <p> Established in: {park.Established} </p>
          <p> Land Area: {park.Area} </p>
          <p> Annual Visitors: {park["Recreation visitors"]}</p> */}

                </div>
              </div>
            </Slider>
          
            </div>
         
      );
    });
    console.log(list);
    return <div className="DataContainer map-glass"> {list} </div>;
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