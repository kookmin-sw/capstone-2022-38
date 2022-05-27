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
import tax from '../../assets/document.png'
import transportation from '../../assets/vehicles.png';
import healthcare from '../../assets/healthcare.png';
import travel from '../../assets/sejong-the-great.png';


const DocSlider = () => {
  const settings = {
        // dots: false,
        // infinite: true,
        // speed: 500,
        // rows: 2,
        // slidesToShow: 3,
        // slidesToScroll: 3
        // initialSlide: 0,
        // responsive: [  
        // ]
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows:2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 600,
            settings: {
                
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
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

                    <a href="https://drive.google.com/file/d/1-lRa0x6CzJimZuj8YSqw0M7j94yWacvN/view?usp=sharing"><div className="back3 small-glass">Download</div></a>
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Bank</h3>
                    
                <div className="doc-image">
                        <img src={bank} alt="blog-image"/>
                        </div>

                    <a href="https://drive.google.com/file/d/1txLxJvJR5hp7mppGPs-zQVtcUhn6seem/view?usp=sharing"><div className="back3 small-glass">Download</div></a>
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Accomodation</h3>
                    
                <div className="doc-image">
                        <img src={accomodation} alt="blog-image"/>
                        </div>


                        
                <a href="https://drive.google.com/file/d/1kt3FXu2y1WrIscpKRYzsSpGkKtJWfeHA/view?usp=sharing"><div className="back3 small-glass">Download</div></a>
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

                <a href="https://korea.assembly.go.kr:447/res/low_03_list.jsp?boardid=1000000037"><div className="back3 small-glass">Download</div></a>
                </div>


                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Tax</h3>
                    
                <div className="doc-image">
                        <img src={tax} alt="blog-image"/>
                        </div>

                <a href="https://www.nts.go.kr/upload/english/sub/2020%20Year-End%20Tax%20Settlement%20Manual%20for%20Foreigners_English.pdf"><div className="back3 small-glass">Download</div></a>
                </div>


                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Transportation</h3>
                    
                <div className="doc-image">
                        <img src={transportation} alt="blog-image"/>
                        </div>

                <a href="https://drive.google.com/file/d/12JDzbyDwNcTaejYtyijI1cLPODc_cXIj/view?usp=sharing"><div className="back3 small-glass">Download</div></a>
                </div>



                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Healthcare</h3>
                    
                <div className="doc-image">
                        <img src={healthcare} alt="blog-image"/>
                        </div>

                <a href="https://drive.google.com/file/d/1Xq0hWldyMqoMU_puNkcZnCE61vJu-YuY/view?usp=sharing"><div className="back3 small-glass">Download</div></a>
                </div>


                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Travel</h3>
                    
                <div className="doc-image">
                        <img src={travel} alt="blog-image"/>
                        </div>

                <a href="https://drive.google.com/file/d/1ZQtL4E1sHmRSR1A7lbQsYlmshfWu7A2q/view?usp=sharing"><div className="back3 small-glass">Download</div></a>
                </div>

           

               
          
         
        </Slider>
   
  );
}
export default DocSlider;