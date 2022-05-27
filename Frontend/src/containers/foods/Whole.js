import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";



const Whole = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  function changeText(text) {
    document.getElementById('chgtext').innerHTML = text;
  }
  
  return (
    <>
    <div className="foodsearch-wrapper">

      
        <div className="foodtype-container">
          <i className="fas fa-arrow-right float-end" />
          <h1 id="chgtext">Have specific food preferences? We'll help you find them</h1>
        </div>

      <div className="restaurantitem-container">
        <div className="row">
          <div className="button-wrapper">
          <Buttons 
          // onclick={changeText(Buttons.innerHTML)}
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}/>
          </div>
          <Card item={item} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Whole;
