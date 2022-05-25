// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";

// import "react-svg-map/lib/index.css";
// import USAMap from "./map.js";

// import SVG from "react-inlinesvg";

// import LogoComponent from "./logo-svg.js";
// import DisplayTable from "./displayTable.js";

// //https://www.nationalparks.org/explore-parks
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStates: []
//     };
//   }

//   sendParks = dataFromChild => {
//     console.log("data" + dataFromChild);
//     this.setState({ selectedStates: dataFromChild });
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* <div id="top">
//           <USAMap callBackParent={this.sendParks} />
//         </div> */}
//         <div >
//           <DisplayTable displayedParks={this.state.selectedStates} />
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);