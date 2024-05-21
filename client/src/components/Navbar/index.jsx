import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <Link to="/" className="logo">EATWELL</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
