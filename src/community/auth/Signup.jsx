import React,{useState} from 'react';
// import Navbar from '../Navbar';
import {Link,useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import {signupUser} from './actions';
import styled from "styled-components";
import { MainContainer, ButtonContainer } from '../CustomStyle';

const Signup = () => {
    const [err,setErr] = useState(false);
    const [loading,setLoading] = useState(false);
    let navigator = useNavigate();
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password1:"",
            password2:"",
        },

       onSubmit: async (values) =>{
         setLoading(true);
          let newUser = await signupUser(values);
          if(newUser) {
              navigator('/login');
          } else {
              setErr(true);
              setLoading(false);
          }
       }
        
    })
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
            placeholder="Name"
            onChange={formik.handleChange} 
            value={formik.values.username}
          />
          <Inputname 
            type="text" 
            placeholder="E-mail address" 
            name="email" 
            onChange={formik.handleChange} 
            value={formik.values.email}
            />
        </InputContainer>
        <InputContainer>
          <PasswordInput
            type="password"
            name="password1"
            placeholder="Password"
            onChange={formik.handleChange} 
            value={formik.values.password1}
          />
          <PasswordInput
            type="password"
            name="password2"
            placeholder="Re-enter password"
            onChange={formik.handleChange} 
            value={formik.values.password2}
          />
        </InputContainer>
        {err && <p className="text-danger">Error Occoured. Try Again</p>}
        <ButtonContainer>Sign up</ButtonContainer> 
        <ButtonContainer onClick={event =>window.location.href='/login'}>Login</ButtonContainer> 
        </form>
        <Link to={"/login/"} > Already have an account? Login </Link>
      </MainContainer>
      </div>
    )
}

export default Signup;

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

const GoToLogin = styled.h5`
cursor: pointer;
margin: 1rem 0 0rem 0;
color:grey;
font-size:15px;
`;

const LoginWith = styled.h5`
cursor: pointer;
margin: 1rem 0 0rem 0;
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