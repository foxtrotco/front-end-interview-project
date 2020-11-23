import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Grid.module.css';
const GridItem= ({item, amountToView}) => {
    const maxItems= item.products.length;
    const [itemsToView, setItemsToView]= useState(amountToView);
    const handleViewMore=()=>{
        setItemsToView(itemsToView+8);
    };
   
    return(
        <>       
            {item.products.slice(0,itemsToView).map((item)=>{
                return (
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
                    </div>);})}
            {itemsToView <= maxItems ? <p className= {styles.textButton} onClick={()=>handleViewMore()}>View More Products</p>:null}
        </>);
    
};
export default GridItem;