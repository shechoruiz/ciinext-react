import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import iconHamburguer from '../assets/static/icon-hamburguer.png';
import iconLens from '../assets/static/icon-lens.png';
import iconMaleUser from '../assets/static/icon-male-user.png';
import logo from '../assets/static/logo-cinext-final.png';

const Header = () => (
    <header className="header">
		<nav>
			<img className="" src={iconHamburguer} alt="Icono hamburguesa"/>
		</nav>
		<div className="header__div">
			<div className="header__img1">
				<input type="text" name="" placeholder="Buscar en Ciinext..." id=""/>
				<img src={iconLens} alt="Icono lupa"/>
			</div>
			<div className="header__img2">
				<img className="header__img2--icon" src={iconMaleUser} alt="Icono usuario"/>
				<p>Perfil</p>
				<ul>
					<li><a href="">Cuenta</a></li>
					<li><a href="">Cerrar sesión</a></li>
				</ul>
			</div>
			<div className="header__img3">
				<Link to="/">
					<img className="header__img3--logo" src={logo} alt="Logo Ciinext"/>
				</Link>
			</div>
		</div>
	</header>
    );

export default Header;