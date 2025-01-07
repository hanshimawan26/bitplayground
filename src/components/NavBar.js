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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles['nav-link']} ${styles.active}`
                                : styles['nav-link']
                        }
                        end
                    >
                        <FontAwesomeIcon icon={faHome} className={styles.icon} />
                    </NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles['nav-link']} ${styles.active}`
                                : styles['nav-link']
                        }
                    >
                        <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    </NavLink>
                </li>
            </ul>
            {/* New button with the provided image */}
            <a
                href="https://bit4change.com" // Replace with the actual BIT4CHANGE website URL
                target="_blank"
                rel="noopener noreferrer"
                className={styles['nav-button']}
            >
                <img
                    src="https://bit4change.com/B4C%20LOGO%20GREEN%20BLACK.svg"
                    alt="BIT4CHANGE Logo"
                    className={styles['nav-image']}
                />
            </a>
        </nav>
    );
};

export default NavBar;
