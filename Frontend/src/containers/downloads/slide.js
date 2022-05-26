import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";




import bank from "./Files/bank.pdf";
import healthcare from "./Files/medical.pdf";
import transportation from "./Files/transportation.pdf";
import travel from "./Files/travel.pdf";
import accomodation from "./Files/accomodation.pdf";
import basickorean from "./Files/basickorean.pdf";
import visa from "./Files/visa.pdf";




import web1 from '../../assets/web-2.png';
import compliant from '../../assets/compliant.png';
import './downloads.css';

import plate from '../../assets/plate.png';
import passport from '../../assets/passport.png';
import bank1 from '../../assets/bank.png';
import accomodation1 from '../../assets/accomodation.png';
import korean from '../../assets/korean.png';
import web from '../../assets/web.png'
import tax from '../../assets/document.png'
import transportation1 from '../../assets/vehicles.png';
import healthcare1 from '../../assets/healthcare.png';
import travel1 from '../../assets/sejong-the-great.png';

 

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
                
                <a href={visa}><div className="back3 small-glass">Download</div></a> 
                    
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Bank</h3>
                    
                <div className="doc-image">
                        <img src={bank1} alt="blog-image"/>
                        </div>
      
                    <a href={bank}><div className="back3 small-glass">Download</div></a> 
                   
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Accomodation</h3>
                    
                <div className="doc-image">
                        <img src={accomodation1} alt="blog-image"/>
                        </div>
                
                        <a href={accomodation}><div className="back3 small-glass">Download</div></a> 
                </div>
                
                
                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Basic Korean</h3>
                    
                <div className="doc-image">
                        <img src={korean} alt="blog-image"/>
                        </div>


                <a href={basickorean}><div className="back3 small-glass">Download</div></a> 

            
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
                        <img src={transportation1} alt="blog-image"/>
                        </div>


                        <a href={transportation}><div className="back3 small-glass">Download</div></a> 

           
                </div>



                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Healthcare</h3>
                    
                <div className="doc-image">
                        <img src={healthcare1} alt="blog-image"/>
                        </div>


                        <a href={healthcare}><div className="back3 small-glass">Download</div></a> 

            
                </div>


                <div class="port_out small-glass">
                <h3 className="subtopic small-glass">Travel</h3>
                    
                <div className="doc-image">
                        <img src={travel1} alt="blog-image"/>
                        </div>

                        <a href={travel}><div className="back3 small-glass">Download</div></a> 
                </div>

           

               
          
         
        </Slider>
   
  );
}
export default DocSlider;