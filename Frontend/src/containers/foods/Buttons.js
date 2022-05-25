import React from "react";
import Data from "./Data";
import './foods.css';

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div>
        <button className="filter-button active" onClick={() => setItem(Data)}>
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button 
              className="filter-button"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
              
            </button>
          );
        })}
        {/* <button className="filter-button" onClick={() => setItem(Data)}>
          All /// remove code if error
        </button> */}
      </div>
    </>
  );
};

export default Buttons;
