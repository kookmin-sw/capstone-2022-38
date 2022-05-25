import React from 'react';
import SKMap from '../../components/krmap/KRMap';
import AttSlider from './slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./destination.css"
import DisplayTable from "./displayTable.js";
import USAMap from "./map.js";

import DisplayItems from "./displayTable";


import INDEX from './index';

// const Destination = () => (

export default class Destination extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedStates: []
      };
    }
  
    sendParks = dataFromChild => {
      console.log("data" + dataFromChild);
      this.setState({ selectedStates: dataFromChild });
    };
  

  render() {
    return (
      
      <div className="touristdest-container  map-glass">
        
      <div className="touristdest-box section__padding ">
      
        <div className="touristdest-heading">
        
          <h1 className="gradient__text">Tourist Attraction</h1>
          <p>All the best attractions of South Korea</p>
          <h4>Click on the map to know</h4>
        </div>

        <div className="both-wrapper">
        <div className="map-wrapper ">  
            <div className="map-image map-glass">
              <USAMap callBackParent={this.sendParks} />
            </div>
        </div>
        
       
       
       
        <div className="content-wrapper  ">
        {/* <div className="object-wrapper "> */}
        

          <div className="row">
          {/* <DisplayItems displayedParks={this.state.selectedStates}/> */}
            <DisplayTable displayedParks={this.state.selectedStates} /> 
          </div>
        </div>
       
       
        </div>
      </div>
    </div>
    
    
    );
  }

}


  
  
  
