import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Functions
import { shorten, isInCart, quantityCount, isInHeart } from '../../helpers/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg";
import heart from "../../assets/icons/heart.svg";

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
                    <img onClick={() => dispatch2({type: "ADD_ITEM", payload: productData})} src={heart} className={styles.heartThin} />
                }
                {
                    isInHeart(state2, productData.id) &&
                    <FontAwesomeIcon onClick={() => dispatch2({type: "REMOVE_ITEM", payload: productData})} icon={faHeart} color='#ff3f16' className={styles.heartSolid} />
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