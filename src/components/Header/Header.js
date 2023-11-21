import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my Rest Countries</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/Countries">Countries</a>
                <a href="/About">About Us</a>
            </nav>
        </div>
    );
};

export default Header;