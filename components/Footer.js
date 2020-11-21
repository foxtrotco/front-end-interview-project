import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'

const links= [
    {
        src:'#',
        icon:  faLink  
    },
    {
        src:'#',
        icon:  faInstagram  
    },
    {
        src:'#',
        icon:  faTwitter  
    },
    {
        src:'#',
        icon:  faFacebook  
    },    {
        src:'#',
        icon:  faEnvelope  
    }
];
const Footer=()=> {
    return (
        <footer className={styles.footerContainer}>
            <ul className={styles.footer}>
                {links.map((link,index)=>(
                    <li key={index} className={styles.footerItem}>
                        <a className={styles.linkIcon} href={link.src}>
                            <FontAwesomeIcon color= {'white'} icon={link.icon}></FontAwesomeIcon></a>
 
                    </li>
                ))}
            </ul>

            <ul className={styles.footer}>
                <li className={styles.footerItem}><a className={styles.link} href="#">Terms of Service</a></li>
                <li className={styles.footerItem}><a className={styles.link} href="#">Privacy</a></li>
            </ul>
        
        </footer>
    );
};
export default Footer;