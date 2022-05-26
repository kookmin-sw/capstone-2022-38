import React, { Component } from "react";
import Select from "react-select";
import character from "../../assets/character.png";
import "./header.css";
import { Link } from "react-router-dom";



const options1 = [
  { value: "scholarship", label: "Scholarship" },
  { value: "internship", label: "Internship" },
  { value: "programs", label: "Programs" },
];

const options2 = [{ value: "country", label: "South Korea" }];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "black",
    backgroundColor: state.data.color,
    fontFamily: "Poppins",

    fontSize: state.selectProps.myFontSize,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.data.color,
    fontSize: state.selectProps.myFontSize,
    fontFamily: state.data.fontFamily,
  }),
};

const Header = () => {
  return (
    <div>
      <section>
        <div className="mainpage_container">
          <header>
            <a href="#" className="logo">
              Reachaliens
            </a>
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
              <Link to={"/about/"}>About</Link>
              </li>
              <li>
                <Link to={"/login/"}>Community</Link>
                
              </li>
            </ul>
          </header>

          <div className="content">
            <h2 className="gradient__text">Go for your dream</h2>
            <div class="react-select-container">
              <Select options={options1} styles={customStyles} />

              <Select options={options2} styles={customStyles} />
            </div>
            <div className="searchBox">
            <Link to={"/main"}>Search</Link>
            </div>
          </div>

          <div className="imgBx">
            <img src={character} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
