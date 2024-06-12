import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';
import logoImg from './BIT Playground.svg';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <img src={logoImg} alt='BIT Playground Logo' className={styles['logo']} />
            <ul className={styles['nav-list']}>
                <li className={styles['nav-item']}>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles.active}` : styles['nav-link']} end>
                        <FontAwesomeIcon icon={faHome} className={styles.icon} />
                    </NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles.active}` : styles['nav-link']} end>
                        <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    </NavLink>
                </li>
                {/* Add more navigation items here */}
            </ul>
        </nav>
    );
};

export default NavBar;
