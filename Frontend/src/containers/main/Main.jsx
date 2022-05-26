import React from 'react';
import scholarship from "../../assets/scholarship.png";
import samsung from "../../assets/samsung.png";
import './main.css';



const Main = () => {
  return (
    <div className="gradient__bg">
    
      <section>
        <div className="container_main">
          
          <div className="search glass">
            <div className="scholarships_total_text">
              <h2>Found 5 categories</h2>
            </div>
          </div>
          
         
         
          <div className="active_tab glass">
              <div className="content_main">

              <div className="tab_pane_image glass">
                  <div className="imgBx">
                    <img src={scholarship} />
                  </div>
                </div>
                
                <div className="text_container ">
                  
                  <div className="scholarship_name glass ">
                    <h2>Global Korea Scholarship</h2>
                  </div>
                   <div className="scholarship_name glass ">
                     <h2>South Korea</h2>
                   </div>
                   
                </div>

                
                <div className="moreBox">
                <a href="https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do">More</a>
                </div>  
               </div>
          </div>



          <div className="active_tab glass">
              <div className="content_main">

              <div className="tab_pane_image glass">
                  <div className="imgBx">
                    <img src={samsung} />
                  </div>
                </div>
                
                <div className="text_container">
                  
                  <div className="scholarship_name glass">
                    <h2>Samsung Scholarship</h2>
                  </div>
                   <div className="scholarship_name glass">
                     <h2>South Korea</h2>
                   </div>
                   
                </div>

                
                <div className="moreBox">
                <a href="https://www.sdream.or.kr/main">More</a>
                </div>  
               </div>
          </div>


          <div className="active_tab glass">
              <div className="content_main">

              <div className="tab_pane_image glass">
                  <div className="imgBx">
                    <img src={scholarship} />
                  </div>
                </div>
                
                <div className="text_container">
                  
                  <div className="scholarship_name glass">
                    <h2>Daewoong Foundation Scholarship</h2>
                  </div>
                   <div className="scholarship_name glass">
                     <h2>South Korea</h2>
                   </div>
                   
                </div>

                
                <div className="moreBox">
                <a href="http://daewoongfoundation.or.kr">More</a>
                </div>  
               </div>
          </div>


          <div className="active_tab glass">
              <div className="content_main">

              <div className="tab_pane_image glass">
                  <div className="imgBx">
                    <img src={scholarship} />
                  </div>
                </div>
                
                <div className="text_container">
                  
                  <div className="scholarship_name glass">
                    <h2>POSCO T Scholarship</h2>
                  </div>
                   <div className="scholarship_name glass">
                     <h2>South Korea</h2>
                   </div>
                   
                </div>

                
                <div className="moreBox">
                <a href="http://www.postf.org/ko/page/asia/scholar.do">More</a>
                </div>  
               </div>
          </div>



          <div className="active_tab glass">
              <div className="content_main">

              <div className="tab_pane_image glass">
                  <div className="imgBx">
                    <img src={scholarship} />
                  </div>
                </div>
                
                <div className="text_container">
                  
                  <div className="scholarship_name glass">
                    <h2>Busan Foundation Scholarship</h2>
                  </div>
                   <div className="scholarship_name glass">
                     <h2>South Korea</h2>
                   </div>
                   
                </div>

                
                <div className="moreBox">
                <a href="http://www.bfic.kr/new/main/main.asp">More</a>
                </div>  
               </div>
          </div>





          </div>
      </section>
    </div>
  );
};

    
export default Main;



   