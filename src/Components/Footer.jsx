import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className='footer-content'>
                <img src='../public/ignite_ico.png' alt='logo Ignite' />
                <div className='rrss'>
                    <a href='https://www.instagram.com/ignite.ind.cba/'>
                        <FaInstagram />
                        <span>/IGNITE.IND.CBA</span>
                    </a>
                </div>
                <div className='links'>
                    <ul>
                        <a href='#logoHome'>
                            <li>Inicio</li>
                        </a>
                        <li>Personalizate</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
            </div>
            <p className="autor">
                Creado por <a href='/'>Emi Cabanillas</a>. 2023
            </p>
        </>
    );
};

export default Footer;
