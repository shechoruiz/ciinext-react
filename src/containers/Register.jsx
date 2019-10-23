import React from 'react';
import "../assets/styles/components/Register.scss"
import MOON_GET_Heavy from '../assets/styles/fonts/moon_get-Heavy.ttf';

const Rule = ({ color }) => (
    <hr 
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: "90%",
            border: 0
        }}
    />
);

const Register = () => (
    <section id="destacado">
        <h1 style={{fontFamily: MOON_GET_Heavy}}>Registro</h1>
        <Rule color="#FFC20F"/>
        <form action="" className="register__container--form">
            <div className="register__container--form-order">
                <label for="txtName">Nombre</label>
                <input type="text" name="" id="txtName" className=""/>
            </div>
            <div className="register__container--form-order">
                <label for="txtLastame">Apellido</label>
                <input type="text" name="" id="txtLastname" className=""/>
            </div>
            <div className="register__container--form-order">
                <label for="txtPhone">Teléfono</label>
                <input type="number" name="" id="txtPhone" className=""/>
            </div>
            <div className="register__container--form-order">
                <label for="txtCity">Ciudad</label>
                <input type="text" name="" id="txtCity"/>
            </div>
            <div className="register__container--form-order">
                <label for="txtBirth">Fecha de nacimiento</label>
                <input type="date" name="" id="txtBirth"/>
            </div>
            <div className="register__container--form-order">
                <label for="txtMphone">Celular</label>
                <input type="number" name="" id="txtMphone"/>
            </div>
            <div className="register__container--form-order">
                <label for="txtEmail">Correo electrónico</label>
                <input type="email" name="" id="txtEmail"/>
            </div>
            <div className="register__container--form-order">
                <label for="txtRol">Rol</label>
                <select name="" id="txtRol">
                    <option value="">Soy productor</option>
                    <option value="">Soy espectador</option>
                </select>
            </div>
            <div className="register__container--form-order">
                <label for="txtPassword">Contraseña</label>
                <input type="password" name="" id="txtPassword"/>
            </div>
            <div className="register__container--form-order">
                <label for="txtRepassword">Ingrese nuevamente la contraseña</label>
                <input type="password" name="" id="txtRepassword"/>
            </div>
            <div className="register__container--form-order submit">
                <input type="checkbox" name="" id=""/>Acepto terminos y condiciones
                <button className="button">Enviar</button>
            </div>
        </form>
    </section>
)

export default Register;