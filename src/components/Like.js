import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// Context
import { HeartContext } from "../context/HeartContextProvider";

// Component
import Favorite from './shared/Favorite';

// Styles
import styles from "./Like.module.scss";

const Like = () => {

    const {state2, dispatch2} = useContext(HeartContext);

    return (
        <div className={styles.container}>
            {
                state2.selectedItems.length ?
                state2.selectedItems.map(item => <Favorite 
                    key={item.id}
                    data={item}
                    />) :
                <div className={styles.alertFavorite}>
                    <h3>You dont have favorite products</h3>
                    <Link to="/home" className={styles.linkAlert}>Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default Like;