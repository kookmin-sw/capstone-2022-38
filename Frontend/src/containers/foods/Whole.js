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

      
        <div className="foodtype-container small-glass">
          <h1 className="gradient__text" id="chgtext">Diet Food</h1>
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
