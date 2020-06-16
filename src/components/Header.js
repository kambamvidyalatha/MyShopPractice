import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/productspage">Products</Link>
                    </li>
                    
                </ul>
                <span className="navbar-text">
                    Navbar text
                </span>
            </nav>
        </div>
    );
};

export default Header;