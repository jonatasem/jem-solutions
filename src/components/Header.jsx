import React, { useState } from 'react';
import '../styles/Header.css';
import { FaBars } from "react-icons/fa";

export default function Header() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(prevState => !prevState);
    };

    return (
        <header className="container-header" id="home">
            <div className="logo">
                <h1>JEM Soluções Digitais</h1>
            </div>
            <nav className={isNavActive ? 'nav-bar active' : 'nav-bar'}>
                <ul>
                    <li>
                        <a href="#home" onClick={toggleNav}>Início</a>
                    </li>
                    <li>
                        <a href="#services" onClick={toggleNav}>Serviços</a>
                    </li>
                    <li>
                        <a href="#orcamento" onClick={toggleNav}>Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="mobile" onClick={toggleNav}>
                <FaBars className='icon-mobile'/>
            </div>
        </header>
    );
}