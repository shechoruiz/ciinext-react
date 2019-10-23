import React from 'react';
import '../assets/styles/components/FooterSocial.scss';
import facebook from '../assets/static/facebook-logo-button.svg';
import instagram from '../assets/static/instagram-logo-button.svg';
import twitter from '../assets/static/twitter-logo-button.svg';
import youtube from '../assets/static/youtube-logo-button.svg';

const FooterSocial = () => (
    <div className="footer__social">
        <a href="" className="footer__social-link facebook"><span dangerouslySetInnerHTML={{__html: facebook}} /></a>
        <a href="" className="footer__social-link instagram"><span dangerouslySetInnerHTML={{__html: instagram}} /></a>
        <a href="" className="footer__social-link twitter"><span dangerouslySetInnerHTML={{__html:twitter}} /> </a>
        <a href="" className="footer__social-link youtube"><span dangerouslySetInnerHTML={{__html:youtube}} /> </a>
    </div>
)
    
export default FooterSocial;