import React from 'react';
import Image from 'next/image';
import styles from './Jumbotron.module.css';
export default function Jumbotron({aisleTitle}) {

    return (
        <div className={styles.jumboTron}>
            <span className={styles.jumboImage}>
                <Image src="/background.png" alt="wine" height="200" width="300"/>
            </span>
            <div className={styles.jumboText}>
                <h1>{aisleTitle} Aisle</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temre et dolierunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}