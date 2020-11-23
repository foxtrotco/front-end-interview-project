import React, {useState} from 'react';
import Image from 'next/image';
import styles from './Grid.module.css';
import GridItem from './GridItems';




export default function Grid({data}) {
    const amountToView=8;

    return (
        <div>
            {data.slice(0,4).map((item) =>
                <div className={styles.itemGrid} key={item.id}>
                    <h2 key= {item.id} className={styles.gridHeader}>
                        {item.name}
                    </h2>
                    <div className={styles.gridItems}>
                        <GridItem key={item.id} item={item} amountToView={amountToView}/>
                    </div>
                </div>
            )
            }
        </div>
    );
}