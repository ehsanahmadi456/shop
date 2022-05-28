import React from 'react';

// Icons
import trash from "../../assets/icons/trash.svg";

// functions
import { shorten } from '../../helpers/functions';

// Styles
import styles from "./Product.module.scss"

const Product = ({productData}) => {
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.footerContainer}>
                <a className={styles.details} href="#">Details</a>
                <div className={styles.counterBtn}>
                    {/* <button style={{width: "30px", height: "30px"}}><img src={trash} alt="trash" /></button> */}
                    {/* <button>-</button>
                    <span>0</span>
                    <button>+</button> */}
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;