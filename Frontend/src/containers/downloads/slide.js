import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import web1 from '../../assets/web-2.png';
import compliant from '../../assets/compliant.png';
import './downloads.css';

import plate from '../../assets/plate.png';
import passport from '../../assets/passport.png';
import bank from '../../assets/bank.png';
import accomodation from '../../assets/accomodation.png';
import korean from '../../assets/korean.png';
import web from '../../assets/web.png'

const DocSlider = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3
  };

  return (
    
      <Slider {...settings}>

      <div class="port_out small-glass">

                <h3 className="subtopic small-glass">Restaraunt</h3>
                <div className="doc-image">
                    
                    <img src={plate} alt="blog-image"/>
                    </div>
               
                <a href="https://mfrk.or.kr"><div className="back3 small-glass">Download</div></a>
                
                </div>
                
                
                <div class="port_out small-glass">

                <h3 className="subtopic small-glass">Visa</h3>
                <div className="doc-image">
                        <img src={passport} alt="blog-image"/>
                        </div>

                    <a href="https://www.mofa.go.kr/eng/wpge/m_5708/contents.do"><div className="back3 small-glass">Download</div></a>
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Bank</h3>
                    
                <div className="doc-image">
                        <img src={bank} alt="blog-image"/>
                        </div>

                    <a href="https://www.mofa.go.kr/eng/wpge/m_5708/contents.do"><div className="back3 small-glass">Download</div></a>
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Accomodation</h3>
                    
                <div className="doc-image">
                        <img src={accomodation} alt="blog-image"/>
                        </div>


                        
                <a href="https://www.mofa.go.kr/eng/wpge/m_5708/contents.do"><div className="back3 small-glass">Download</div></a>
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Basic Korean</h3>
                    
                <div className="doc-image">
                        <img src={korean} alt="blog-image"/>
                        </div>




                <a href="https://www.korean.go.kr/attachFile/edu/forein03.pdf"><div className="back3 small-glass">Download</div></a>
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Course Registration</h3>
                    
                <div className="doc-image">
                        <img src={web} alt="blog-image"/>
                        </div>


                        
                <a href="#"><div className="back3 small-glass">Download</div></a>
                </div>


                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Useful websites</h3>
                    
                <div className="doc-image">
                        <img src={web1} alt="blog-image"/>
                        </div>


                <a href="#"><div className="back3 small-glass">Download</div></a>
                </div>

                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Laws</h3>
                    
                <div className="doc-image">
                        <img src={compliant} alt="blog-image"/>
                        </div>

                <a href="#"><div className="back3 small-glass">Download</div></a>
                </div>

           

               
          
         
        </Slider>
   
  );
}
export default DocSlider;