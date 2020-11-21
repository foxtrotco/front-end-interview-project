import React from 'react';
import NavMenu from './NavMenu';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className={styles.navBar}>
            <NavMenu/>
            <li className={styles.logo}
            ><a className={styles.link} href="#">Foxtrot</a></li>
            <li className={styles.item}>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon color= {'white'} icon={faShoppingBag}></FontAwesomeIcon></a>
            </li>
        </nav>
        
    );
}
