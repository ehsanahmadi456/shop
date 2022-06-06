import React, { useContext } from 'react';

// styles
import styles from "./Favorite.module.scss";

// Functions
import { shorten, isInCart, quantityCount, isInHeart } from '../../helpers/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Context
import { CartContext } from '../../context/CartContextProvider';
import { HeartContext } from '../../context/HeartContextProvider';

const Favorite = ({data}) => {

    const {state, dispatch} = useContext(CartContext);
    const {state2, dispatch2} = useContext(HeartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cardHeart}>
                {
                    !isInHeart(state2, data.id) &&
                    <i onClick={() => dispatch2({type: "ADD_ITEM", payload: data})} className="fa-regular fa-heart"></i>
                }
                {
                    isInHeart(state2, data.id) &&
                    <i onClick={() => dispatch2({type: "REMOVE_ITEM", payload: data})} className="fa-solid fa-heart"></i>
                }
            </div>
            <img className={styles.cardImage} src={data.image} alt="product" />
            <h3>{shorten(data.title)}</h3>
            <p>{`${data.price} $`}</p>
            <div className={styles.footerContainer}>
                <a className={styles.details} href="#">Details</a>
                <div className={styles.counterBtn}>
                    {quantityCount(state, data.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, data.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>}
                    {quantityCount(state, data.id) > 0 && <span className={styles.counter}>{quantityCount(state, data.id)}</span>}
                    {
                        isInCart(state, data.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;