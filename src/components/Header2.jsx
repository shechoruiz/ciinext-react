import React from 'react';
import '../assets/styles/components/Header2.scss';
import logo from '../assets/static/logo-cinext-final.png';

const Header2 = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Logo Ciinext"/>
    </header>
);

export default Header2;