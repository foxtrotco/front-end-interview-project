import React, {useState} from 'react';
import styles from './Navbar.module.css';
import HamburgerMenu from 'react-hamburger-menu';
export default function NavMenu() {
    const [open, setOpen]= useState(false);
    const handleClick=()=> {
        setOpen(!open);
    };
    return (
        
        <>
            <HamburgerMenu
                className={styles.hamburger}
                isOpen={open}
                menuClicked={handleClick.bind(this)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
            />
            {open?
                <ul className={styles.menu}>
                    <li className={styles.item}><a className={styles.link} href="#">Stores</a></li>
                    <li className={styles.item}><a className={styles.link} href="#">Contact Us</a></li>
                </ul>:null}
            <ul className={styles.deskTopMenu}>
                <li className={styles.item}><a className={styles.link} href="#">Stores</a></li>
                <li className={styles.item}><a className={styles.link} href="#">Contact Us</a></li>
            </ul>
        </>
    );}