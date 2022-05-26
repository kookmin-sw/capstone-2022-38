import React from 'react';
import "./destination.css"
import DisplayTable from "./displayTable.js";
import SouthKoreaMap from "./map.js";








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

        </div>


        <div className="both-wrapper">


        <div className="map-wrapper">  
            <div className="map-image">
              <SouthKoreaMap callBackParent={this.sendParks} />
            </div>
        </div>
        
       
       
       
         <div className="content-wrapper">    
            <div className="row">
          
            <DisplayTable displayedParks={this.state.selectedStates} /> 
          </div>
        </div>
        
      </div>


    </div>
    
    
    );
  }

}


  
  
  
