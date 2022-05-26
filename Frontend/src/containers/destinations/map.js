import React from "react";
import SouthKorea from "@svg-maps/south-korea";
import { CheckboxSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

import parks from "./korea.json";
import { getLocationName } from './utility';

import "./styles.css";

class SouthKoreaMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointedLocation: null,
      focusedLocation: null,
      selectedLocations: [],
      parkData: parks,
      displayedParkData: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
  }

  handleOnChange(selectedNodes) {
    var displayedParks = [];
    for (var i = 0; i < this.state.parkData.length; i++) {
      for (var j = 0; j < Object.keys(selectedNodes).length; j++) {
        if (
          this.state.parkData[i].Location ===
          selectedNodes[j].attributes.name.value
        ) {
          displayedParks.push(this.state.parkData[i]);
        }
      }
      this.setState(prevState => {
        return {
          ...prevState,
          selectedLocations: selectedNodes.map(node => node.attributes.name.value)
        };
      });
    }

    console.log("this.state.displayedParkData" + this.state.displayedParkData);
    this.props.callBackParent(displayedParks);
    }


  handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}



  render() {
    return (
      <div>
					<div className="examples__block__info__item glass">
						Pointed location: {this.state.pointedLocation}
					</div>

        <div className="mapContainer">
          <CheckboxSVGMap 
            height="200%"
            overflow="auto"
            map={SouthKorea}
            onChange={this.handleOnChange}
            onLocationMouseOver={this.handleLocationMouseOver}
          />

        </div>

      </div>
    );
  }
}

export default SouthKoreaMap;
