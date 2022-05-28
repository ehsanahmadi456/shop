import React from 'react';

// Image
import logo from "../../assets/images/logo.png";
import image1 from "../../assets/images/img1.svg";

// Styles
import styles from "./Main.module.scss";

const Main = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imageMain} src={logo} />
            <img className={styles.imageDemo} src={image1} />
        </div>
    );
};

export default Main;