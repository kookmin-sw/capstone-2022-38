import styled from "styled-components";

import Button from '../../components/button/Button';

function Introduction() {
  return (
    <IntroContainer>

      <ButtonContainer>
        <Button content="Home"  />
      </ButtonContainer>
      <WelcomeText>
        <br></br>What is Reachaliens?
      </WelcomeText>
      <SecondText>
        <br></br>
        <br></br>
        Reachaliens is a community-based website platform aiming to help
        international students coming to South Korea adapt to the new
        environment. The website gives information about: academic issues
        including course information and registration, housing plan and
        policies, visa-related matters, scholarship opportunities, restaurants
        recommendations for specific diets and so on. The website also provides
        a community page where International students can connect with each
        other and share informations with each other. On the community page,
        students can post about internship/scholarship opportunities, exchange
        used goods and ask about any questions they might have.
      </SecondText>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  display: flex;
  margin-bottom: -200px;
  align-items: center;
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
    height: 50vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 360px) {
    width: 76vw;
    height: 55vh;
    h4 {
      font-size: small;
    }
    text-align: justify;
  }
  @media only screen and (min-width: 411px) {
    width: 76vw;
    height: 55vh;
  }

  /* the box size */
  @media only screen and (min-width: 768px) {
    width: 76vw;
    height: 55vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 76vw;
    height: 55vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 76vw;
    height: 55vh;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: right;
  width: 100%;
  justify-content: right;
`;

const WelcomeText = styled.h1`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondText = styled.h4`
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 30px;
  display: flex;
  align-items: justify;
  justify-content: justify;
`;

export default Introduction;