import React,{useEffect,useState} from 'react';
import Navbar from '../Navbar';
import Loader from '../Loader';
import Post from './Post';
import {useSearchParams} from 'react-router-dom';
import {searchResults} from './actions';
import {useFormik} from 'formik';

import { MainContainer } from '../CustomStyle';



const Search = () => {
    const [query,setQuery] = useSearchParams({})
    let searchQuery = query.get('q')
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    const handleSearch = async (post,user) => {
        if(searchQuery) {
            setLoading(true);
            const response = await searchResults(searchQuery,user);
            if(response) {
                response.posts ? setPosts(response.posts) : setPosts([])
                response.users ? setUsers(response.users) : setUsers([])
                console.log(response)
                setLoading(false);
            }
        }
    }

    let formik = useFormik({
        initialValues:{
            check:[]
        },
        onSubmit: (values) => {
            if(values.check.includes('post') && values.check.includes('user')) {
                setQuery({q:input})
                setPosts([]); setUsers([])
                handleSearch(searchQuery,searchQuery)
            }
            else if(values.check.includes('post')) {
                setQuery({q:input})
                setPosts([]); setUsers([])
                handleSearch(searchQuery,null)
            } else if(values.check.includes('user')) {
                setQuery({q:input})
                setPosts([]); setUsers([])
                handleSearch(null,searchQuery)
            }
        }
    })

    useEffect(()=>{
        handleSearch();
    },[query])

    return (
        <div className="community_body">
        <MainContainer>
        <Navbar/>
        <div className="container" id="main__container">
        { /*query && <p style={{fontFamily:"Roboto",textAlign:"center",margin:"0.1em 0"}}>
        Showing Results for:  
    </p>*/}
        {
            loading ? <Loader/> :
            <div>
            
       {posts.map((post)=>{
            return <Post key={post.id} 
            id={post.id} 
            caption={post.body} 
            image={post.image} 
            total_likes={post.total_likes} 
            userId={post.author_detail.id} 
            username={post.author_detail.username} 
            avatar={null} />
        })}

        {users.map((user)=>{
            return <div key={user.id}>
            {user.username}
            </div>
        })}

            </div>
        }
        </div>
        </MainContainer>
        </div>
    )
}

export default Search;