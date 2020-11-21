import React from 'react';
import Image from 'next/image';
import styles from './Grid.module.css';

export default function Grid({data}) {
    console.log(data);
    return (
    // <div className={"itemGrid"}>
        data.slice(0,4).map((item) =>
            <div className={styles.itemGrid} key={item.id}>
                <h2 key= {item.id} className={styles.gridHeader}>
                    {item.name}
                </h2>
                <div className={styles.gridItems}>
                    {item.products.slice(0,8).map((item)=>
                        <div key = {item.id} className={styles.gridItem}>
                            <Image
                                className={styles.itemPicture}
                                src={item.assets[0].url}
                                alt={item.title}
                                width={500}
                                height={500}
                            />
                            <div className={styles.itemText}>
                                <span>
                                    {item.title}
                                </span>
                                <span className={styles.priceText}>
                                ${item.unitPrice}.00
                                </span>
                              
                            </div>
                        </div>
                             
                    )}
                </div>
            </div>
        )
      
    // </div>
    );
}