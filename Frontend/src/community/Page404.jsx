import React from 'react';
import Navbar from './Navbar';
import Image404 from '../assets/404.svg';

const Page404 = () => {
    return (
        <div className="community_body">
        <section>
        <Navbar/>
        <div className="container" id="main__container">
        <div className="row">
        <div className="col-md-8 mx-auto">
        <img src={Image404} alt="404" 
        style={{display:"block",height:"30em",width:"50em"}} />
        </div>
        </div>
        </div>
        </section>
        </div>
    )

}

export default Page404;