import React from "react";
import "./App.css";

import { Routes, Route } from 'react-router-dom';

import Home from './community/Home';
import PostDetail from './community/post/Detail';
import Page404 from './community/Page404';
import Profile from './community/user/Profile';
import UserDetail from './community/user/UserDetail';
import Signup from './community/auth/Signup';
import Login from './community/auth/Login';
import Logout from './community/auth/Logout';
import Search from './community/post/Search';
import EditPost from './community/post/Edit';
import ProtectedRoute from './community/Route';

import {UserProvider} from './context/UserContext'

import Main from './containers/main/Main';

import About from './containers/about/About';


import Main_Home from './containers/main_home/Main_Home';

function App() {
  return (
    <UserProvider>
    <Routes>
    <Route path="/" element={<Main_Home />} />
    
   

    
    <Route path="/main" element={<Main />} />
    <Route path="/about" element={<About />} />


    <Route element={<ProtectedRoute/>}>
    <Route path="/home" element={<Home />} />
    <Route path="post/:postId" element={<PostDetail />} />
    <Route path="post/edit/:postId" element={<EditPost />} />
    <Route path="profile/" element={<Profile/>} />
    {/* search route with optional parameter  */}
    <Route path="search/" element={<Search/>}> 
      <Route path=":query" element={<Search/>}/>
    </Route>
    {/* search route with optional parameter  */}
    <Route path="user/:userId" element={<UserDetail/>} />
    </Route>
    
    <Route path="signup/" element={<Signup/>} />
    <Route path="login/" element={<Login/>} />
    <Route path="logout/" element={<Logout/>} />
    <Route path="*" element={<Page404/>} />
    </Routes>
    </UserProvider>
  );
}

export default App;
