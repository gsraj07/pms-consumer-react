import React from "react";
import '../style/NavBar1.css';

import {Link} from 'react-router-dom';


const NavBar1 = () => {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                     <Link to="/" className="nav-link">Home</Link> {/* <a href='/'> */}
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>

                <li className="nav-item">
                    <Link to="/product" className="nav-link">Products</Link>
                </li>
                </ul>
        </nav>
    );
}
export default NavBar1;
