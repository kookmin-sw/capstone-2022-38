import React, { useState, useContext } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { loginUser } from "./actions";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import styled from "styled-components";
import { MainContainer } from '../CustomStyle';
import { useSpring, animated } from "react-spring";

// import "./community.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login_success } = useContext(UserContext);
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      let data = await loginUser(values);
      if (data) {
        login_success(data);
        navigate("/home");
        refreshPage();
      } else {
        setErr(true);
        setLoading(false);
      }
    },
  });

 

  return (
    <div className="community_body">
      
    <MainContainer onSubmit={formik.handleSubmit}>
    <WelcomeText>Reachaliens Community</WelcomeText>
    <SecondText>
      Welcome to Reachaliens Community. Here, you can connect and share with
      other aliens.
    </SecondText>
    <form onSubmit={formik.handleSubmit}>
    <InputContainer>
      <Inputname
        type="text"
        name="username"
        placeholder="username"
        onChange={formik.handleChange} value={formik.values.username}
        // value={this.state.credentials.username}
        // onChange={this.inputChanged}
      />
      <PasswordInput
        type="password"
        name="password"
        placeholder="password"
        onChange={formik.handleChange}
        value={formik.values.password} 
        // value={this.state.credentials.password}
        // onChange={this.inputChanged}
      />
    </InputContainer>
    { err && <p className="text-danger"> Invalid Credentials </p>}
    <ButtonContainer>
      <StyledButton >Log in</StyledButton>
    </ButtonContainer>
    <Link to={"/signup/"} > Don't have an account yet? Sign up→ </Link>
    <HorizontalRule />
    <ForgotPassword>Forgot Password?</ForgotPassword>
    </form>
    
  </MainContainer>
  </div>
  );
};

export default Login;

const WelcomeText = styled.h1`
margin: 8rem 0 2rem 0;
`;

const SecondText = styled.h4`
margin: 0rem 0 4rem 0;
`;

const InputContainer = styled.div`
display: flex;
column-gap: 30px;
// align-items: center;
height: 100px;
width: 500px;
border-radius: 30px;
`;

const Inputname = styled.input`{
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

const PasswordInput = styled.input`
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

const StyledButton = styled.button`
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

const StyledButton2 = styled.button`
background: #cda3f1;
text-transform: uppercase;
letter-spacing: 0.1rem;
margin-top : 10px;
width: 80px;
height: 46px;
left: 868px;
top: 616px;
box-shadow: 2px 2px 5px rgba(169, 169, 169, 0.25);
border: none;
color: white;
border-radius: 30px;
cursor: pointer;
`;

const ButtonContainer = styled.div`
margin: 0rem 0 0.3rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const LoginWith = styled.h5`
cursor: pointer;
margin: 1rem 0 0rem 0;
text-decoration:underline;
color:grey;
&:hover {
  color:black;
  transition:0.5s;
}
`;

const HorizontalRule = styled.hr`
width: 36%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
background: linear-gradient(90deg, #aaaaa74f 0%, #cacbcb 0%, #e6e5e6 100%);
background-color: #7a7a7a;
margin: 0.3rem 0 1rem 0;
backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
cursor: pointer;
`;