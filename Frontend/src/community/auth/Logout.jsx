import React,{useEffect,useContext} from 'react';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';
import {UserContext} from '../../context/UserContext'

import styled from "styled-components";


const Logout = ()=> {
    const {logout} = useContext(UserContext);
    useEffect(()=>{
        logout();
    },[])
    return (
      <div className="community_body">

        <MainContainer>
        <Navbar/>
        <div className="home_container" id="main__container">
        <div className="row">
        <div className="col-md-4 mx-auto" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:'center'}}>
        <h4 style={{fontFamily:"Roboto",textAlign:"center"}}>
        You have been Logged Out.
        </h4>
        <Link to="/login" className="btn__primary">Login</Link>
        </div>
        </div>
        </div>
        </MainContainer>
        </div>
    )
}

export default Logout;

const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
min-width: 62vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 110px;
color: #000000;
font-family: "Open Sans";
font-style: normal;
text-transform: uppercase;
letter-spacing: 0.1rem;
@media only screen and (max-width: 320px) {
  width: 80vw;
  height: 90vh;
  hr {
    margin-bottom: 0.3rem;
  }
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 360px) {
  width: 80vw;
  height: 90vh;
  h4 {
    font-size: small;
  }
}
@media only screen and (min-width: 411px) {
  width: 80vw;
  height: 90vh;
}

@media only screen and (min-width: 768px) {
  width: 80vw;
  height: 80vh;
}
@media only screen and (min-width: 1024px) {
  width: 70vw;
  height: 50vh;
}
@media only screen and (min-width: 1280px) {
  width: 30vw;
  height: 80vh;
}
`;