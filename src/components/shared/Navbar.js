import React from 'react';

// Styles
import styles from "./Navbar.module.scss";

// Images
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <img className={styles.headLogo} src={logo} />
                </div>
                <div className={styles.headerRight}>
                    <ul className={styles.listNavBar}>
                        <li><a className={styles.itemNavBar} href="#">SignUp</a></li>
                        <li><a className={styles.itemNavBar} href="#">Profile</a></li>
                        <li><a className={styles.itemNavBar} href="#">Favorite</a></li>
                        <li><a className={styles.itemNavBar} href="#">Products</a></li>
                        <li><a className={styles.itemNavBar} href="#">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;