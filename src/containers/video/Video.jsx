import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import perryimg from "../../assets/perry.jpg";
import Mettiimg from "../../assets/Metti.jpg";
import Yignimg from "../../assets/yign.jpg";

function Video() {
  return (
    <AboutContainer>
      <Title>Who are we?</Title>
      <BodyContainer>
        <Avatar src={perryimg} />
        <About>
          Atkhayeva Perizat<br></br> ID:****3533
        </About>
        <Avatar src={Mettiimg} />
        <About>
          Nigusie Metti Kebede <br></br>ID:****1590
        </About>
        <Avatar src={Yignimg} />
        <About>
          Ingrid Laurence <br></br> ID:****3530
        </About>
      </BodyContainer>
      <Videoplayer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
          height="300"
          width="300"
        />
      </Videoplayer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  margin-top: 350px;
  align-items: left;
  flex-direction: column;
  height: 90vh;
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
    width: 76vw;
    height: 95vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 76vw;
    height: 95vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 76vw;
    height: 95vh;
  }

  /* the box size */
  @media only screen and (min-width: 768px) {
    width: 7vw;
    height: 95vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 76vw;
    height: 95vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 76vw;
    height: 95vh;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-left: 15px;
  margin-top: 38px;
`;

const Avatar = styled.img`
  height: 100%;
  width: 10%;
  border-radius: 110px;
  margin-left: 25px;
`;

const Title = styled.h2`
  margin-top: 65px;
  margin-left: 48px;
`;

const About = styled.h6`
  margin-top: 30px;
`;

const Videoplayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export default Video;