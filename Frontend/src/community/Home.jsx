import React,{useContext, useEffect, useState} from 'react';
import Navbar from './Navbar';
import CreatePost from './post/Create';
import {UserContext} from '../context/UserContext'
import styled from "styled-components";
import { MainContainer } from './CustomStyle';
import Post from './post/Post';
import {getPosts,likePost} from './post/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import {deletePost} from './post/actions'


const Home = () => {
    const {user} = useContext(UserContext);
    let avatar = user.data.user.avatar;

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [nextPage,setNextPage] = useState('');

    useEffect(() =>{
        // fetch post
        const fetchData = async () =>{
            setLoading(true);
            let response = await getPosts();
        if(response) {
            setNextPage(response.next)
            setPosts(response.results);
            setLoading(false)
        }
        }
    fetchData()},[])

    // fetch next page for infinite scroll  set the next url and start fetch
    const fetchNextPage = async () => {
        let response = await getPosts(nextPage);
        if(response) {
            setNextPage(response.next)
            setPosts(posts.concat(response.results))// add previous post + new fetch post
        }
    }

    // like the specific post
    // on click of like btn handleLike props is called and it will call this function
    const postLike = async (postId) => {
        await likePost(postId);
    }

    const Delete = async (postId) =>{
      let data = await deletePost(postId)
      if(data) {
          // remove the deleted post and set filtered posts as setPosts
          let filteredPosts = posts.filter((post)=>post.id !== parseInt(postId))
          setTimeout(() => {
              setPosts([...filteredPosts])
          }, 1000);
      }
  }
    
    return(
      <div className="community_body">
        <MainContainer>
        <Navbar />
        <div className="container" id="scrollableDiv">
            <div className="col-md-8 mx-auto">
            <CreatePost avatar={avatar} />
            <div className="postlist">

            { loading ? <Loader/> : 
            
            <InfiniteScroll 
            dataLength={posts.length} 
            next={fetchNextPage} 
            hasMore={nextPage?true:false} 
            loader={<Loader/>}
            scrollableTarget="scrollableDiv">
            
            {posts.map((post)=>{
                return <Post key={post.id} 
                id={post.id} 
                caption={post.body} 
                image={post.image} 
                total_likes={post.total_likes} 
                userId={post.author_detail.id} 
                username={post.author_detail.username} 
                avatar={post.author_detail.avatar} 
                handleLike={()=>postLike(post.id)}
                showDeleteBtn={true}
                handleDelete={()=>Delete(post.id)}
                showEditBtn={true}
                />
            })}

            </InfiniteScroll>}

            </div>
            </div>
        </div>
        </MainContainer>
        </div>
    )

   
}

export default Home;

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