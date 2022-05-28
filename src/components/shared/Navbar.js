import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li><Link className={styles.itemNavBar} to="/home">SignUp</Link></li>
                        <li><Link className={styles.itemNavBar} to="/profile">Profile</Link></li>
                        <li><Link className={styles.itemNavBar} to="/favorite">Favorite</Link></li>
                        <li><Link className={styles.itemNavBar} to="/products">Products</Link></li>
                        <li><Link className={styles.itemNavBar} to="/home">Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;