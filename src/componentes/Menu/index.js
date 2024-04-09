import React from 'react';
import styles from './Menu.module.css'
import { NavLink, useLocation } from 'react-router-dom';

export default function Menu(){
    const location = useLocation();
    return (
        <header>
            <nav className={styles.navegation}>
                <NavLink className={styles.link} to='/'>
                    Inicio
                </NavLink>
                <NavLink className={styles.link} to='/sobremim'>
                    sobremim
                </NavLink>
            </nav>
        </header>
    );
}