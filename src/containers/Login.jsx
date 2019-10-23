import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/components/Login.scss";
import google from '../assets/static/google-logo-button.svg';
import twitter from '../assets/static/twitter2-logo-button.svg';
import logo from "../assets/static/logo-cinext-final.png";
import logoUser from "../assets/static/icon-man-user.png";
import logoPass from "../assets/static/icon-locked-padlock.png";
import MOON_GET_Heavy from '../assets/styles/fonts/moon_get-Heavy.ttf';

const Login = () => (
    <> {/* React Fragment - Para no hacer uso de un div adicional que dibuje sobre el nodo del DOM */}
        <section className="login">
            <div className="login__container">
                <h2 style={{fontFamily: MOON_GET_Heavy}}>Inicio de sesión</h2>
                <form className="login__container--form" action="">
                    <input type="text" className="input icon user" placeholder="Usuario" name="" id="" style={{backgroundImage:"url(" + logoUser + ")"}}/>
                    <input type="password" className="input icon password" placeholder="Contraseña" name="" id="" style={{backgroundImage:"url(" + logoPass + ")"}}/>
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuérdame
                        </label>
                        <a href="/">Olvide mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div>
                        <a href=""><span dangerouslySetInnerHTML={{__html: google}} /></a>Inicia sesión con Google
                    </div>
                    <div>
                        <a href=""><span dangerouslySetInnerHTML={{__html: twitter}} /></a>Inicia sesión con Twitter
                    </div>
                </section>
                <p className="login__container--register">¿No tienes una cuenta?<Link to="/register"> Regístrate!</Link> 
                </p>
            </div>
        </section>
    </>
)

export default Login;