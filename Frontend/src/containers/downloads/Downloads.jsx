import React, { Component } from "react";

import DocSlider from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './downloads.css';





const Downloads = () => {
        return (

                <div className="downloads">
                <div className="downloads-container section__padding glass" id="blog">
                    <div className="slider-container">
                        <DocSlider />
                </div>
              </div>
              </div>
                )
        }
        export default Downloads;

      

