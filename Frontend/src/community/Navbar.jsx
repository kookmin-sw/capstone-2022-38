import React,{useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import Logo from '../assets/logo1.png';
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
    <nav className="navbar navbar-expand-lg navbar-light" style={{}}>
    <div className="container">
    <Link className="navbar-brand text-primary" to="/home">
    <img src={Logo} alt="logo" style={{height:"2em",width:"2em"}} />
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
        <div className="toolbar ms-auto">
            <ul><Link className="dropdown-item" to="/profile">Profile</Link></ul>
            <ul><Link className="dropdown-item" to="/login">Logout</Link></ul>
        </div>

    {/* <ul className="ms-auto navbar-nav">
    <li className="nav-item dropdown">
    <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fas fa-ellipsis-h" />
    </a>
    {user.data?
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
    <li><Link className="dropdown-item" to="/login">Logout</Link></li>
    </ul> :
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <li><Link className="dropdown-item" to="/login">Login</Link></li>
    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
    </ul>
    }
    
    </li>
    </ul> */}
    </div>
    
    </div>
    </nav>
    )
}

export default Navbar;