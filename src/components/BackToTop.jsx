import React, { useState, useEffect } from 'react';
import '../styles/BackToTop.css';
import imgBackToTop from '../assets/img/arrow.svg';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            toggleVisibility();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button 
            className={`back-to-top ${isVisible ? 'visible' : ''}`} 
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            style={{
                display: isVisible ? 'block' : 'none',
            }}
        >
            <img className='btn-to-top' src={imgBackToTop} alt="" />
        </button>
    );
}