import React,{useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import Logo from '../assets/reachaliens-logo.svg';
import {useFormik} from 'formik'

const Navbar = () => {
    let {user} = useContext(UserContext); // authenticated user

    let navigate = useNavigate();

    let formik = useFormik({
        initialValues:{
            query:""
        },
        onSubmit:(values)=>{
            navigate(`/search?q=${values.query}`)
        }
    })

    return (
    <nav className="navbar navbar-expand-xl navbar-light col-md-8 mx-auto">
        <div className="container">

        <Link className="navbar-brand text-primary" to="/home">
        <img src={Logo} alt="logo" style={{height:"2em", width:"7em"}} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto">
                <form onSubmit={formik.handleSubmit} className="d-flex" id="search__box">
                <input className="form-control me-2" name="query" type="search" placeholder="search posts" aria-label="Search" style={{border:"none",background:"none"}}
                onChange={formik.handleChange} />
                <button className="btn btn-sm btn-outline-primary" type="submit" style={{border:"none"}}> <i className="fas fa-search"/> </button>
                </form>
            </div>
            <div className="navbarbtn-wrapper d-flex justify-content-between mt-auto p-2">
                <Link className="navbar-btn" to="/">Main</Link>
                <Link className="navbar-btn" to="/profile">Profile</Link>
                <Link className="navbar-btn" to="/login">Logout</Link> 
            </div>
        </div>
        
        </div>
    </nav>
    )
}

export default Navbar;