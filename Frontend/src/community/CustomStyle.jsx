import styled from 'styled-components';

export const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 90vh;
max-width:100%;
background: rgba(255, 255, 255, 0.15);

border-radius: 25px;
box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
border: 1px solid rgba(255, 255, 255, 0.25);
border-top: 1px solid rgba(255, 255, 255, 0.5);
border-left: 1px solid rgba(255, 255, 255, 0.5);
-webkit-backdrop-filter: blur(4px);
backdrop-filter: blur(4px);

color: #000000;
font-family: var(--font-family);
font-size:14px;
font-style: normal;

@media only screen and (max-width: 320px) {
    width: 70w;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 70vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 70vw;
    height: 90vh;
  }
  
  @media only screen and (min-width: 768px) {
    width: 70vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 70vw;
    height: 90vh;
  }
`;

export const PostContainer = styled.div`
width: 100%;
margin:1.5em auto;
background: rgba(256,256,256,0.5);
border-radius:15px;
border-style:solid;
border-width:0.5px;
border-color:rgba(230,230,230,0.7);
box-shadow:3px 3px 4px rgba(195,195,195,0.1);
padding: 1em;
`;

export const FormGlass = styled.form`
width: 100%;
margin:1.5em auto;
background: rgba(256,256,256,0.5);
border-radius:15px;
border-style:solid;
border-width:0.5px;
border-color:rgba(230,230,230,0.7);
box-shadow:3px 3px 4px rgba(195,195,195,0.1);
padding: 1em;
`;

export const ButtonContainer = styled.button`
border:none;
background:#cda3f1;
border-radius: 30px;
width: 20%;

margin: 0rem 1rem;
padding:1rem;
display: flex;
align-items: center;
justify-content: center;

text-transform: uppercase;
color: black;

&:hover{
    background:red;
    transition:0.5s;
}
`;
