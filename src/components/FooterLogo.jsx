import React from 'react';
import '../assets/styles/components/FooterLogo.scss';
import logo from '../assets/static/logo-cinext-final.png'

const FooterLogo = () => (
    <div className="footer__logo">
        <img className="footer__logo-img" src={logo} alt="Logo Ciinext"/>
    </div>
)

export default FooterLogo;