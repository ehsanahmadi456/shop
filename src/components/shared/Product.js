import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// Functions
import { shorten, isInCart, quantityCount, isInHeart } from '../../helpers/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg"

// Styles
import styles from "./Product.module.scss"

// Context
import { CartContext } from '../../context/CartContextProvider';
import { HeartContext } from '../../context/HeartContextProvider';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);
    const {state2, dispatch2} = useContext(HeartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cardHeart}>
                {
                    !isInHeart(state2, productData.id) &&
                    <i onClick={() => dispatch2({type: "ADD_ITEM", payload: productData})} className="fa-regular fa-heart"></i>
                }
                {
                    isInHeart(state2, productData.id) &&
                    <i onClick={() => dispatch2({type: "REMOVE_ITEM", payload: productData})} className="fa-solid fa-heart"></i>
                }
            </div>
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.footerContainer}>
                <Link to={`/home/${productData.id}`} className={styles.details}>Details</Link>
                <div className={styles.counterBtn}>
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;