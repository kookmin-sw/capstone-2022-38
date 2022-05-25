import styled from "styled-components";

export const MainContainer = styled.div`
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

export const WelcomeText = styled.h1`
margin: 8rem 0 2rem 0;
`;

export const SecondText = styled.h4`
margin: 0rem 0 4rem 0;
`;

export const InputContainer = styled.div`
display: flex;
column-gap: 30px;
// align-items: center;
height: 100px;
width: 500px;
border-radius: 30px;
`;

export const Inputname = styled.input`{
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
color: #3c354e;
font-size: 1rem;
font-weight: bold;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}
&::placeholder {
  color: #b9abe099;
  font-weight: 100;
  font-size: 1rem;
}
`;

export const PasswordInput = styled.input`
&[type="password"] {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
}
`;

export const StyledButton = styled.button`
background: #cda3f1;
text-transform: uppercase;
letter-spacing: 0.1rem;
width: 179px;
height: 59px;
left: 868px;
top: 616px;
box-shadow: 2px 2px 5px rgba(169, 169, 169, 0.25);
border: none;
color: white;
border-radius: 30px;
cursor: pointer;
`;

export const ButtonContainer = styled.div`
margin: 0rem 0 0.3rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const LoginWith = styled.h5`
cursor: pointer;
margin: 1rem 0 0rem 0;
`;

export const HorizontalRule = styled.hr`
width: 36%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
background: linear-gradient(90deg, #aaaaa74f 0%, #cacbcb 0%, #e6e5e6 100%);
background-color: #7a7a7a;
margin: 0.3rem 0 1rem 0;
backdrop-filter: blur(25px);
`;

export const ForgotPassword = styled.h4`
cursor: pointer;
`;

