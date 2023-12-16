import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../Navlink/ActiveLink';

const Header = () => {
    return (
     <nav className='nav'>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/About">About us</ActiveLink>
        <ActiveLink to="/Contact">Contact</ActiveLink>
        <ActiveLink to="/Friends">Friends</ActiveLink>
        <ActiveLink to="/Posts">Posts</ActiveLink>
     </nav>
    );
};

export default Header;