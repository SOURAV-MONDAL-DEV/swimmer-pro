import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img className='image' src={logo} alt='' ></img>
            <h1>Swimmer-Pro</h1>
        </nav>
    );
};

export default Header;