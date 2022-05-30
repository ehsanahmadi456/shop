import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "./Navbar.module.scss";

// Images
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className={`navbar navbar-expand-lg bg-light ${styles.container}`}>
            <div className={`container-fluid ${styles.header}`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className={styles.headerLeft}>
                        <img className={styles.headLogo} src={logo} />
                    </div>
                    <div className={`collapse navbar-collapse w-100 ${styles.navbarCollapse}`} id="navbarToggler">
                        <ul className={`navbar-nav ms-auto ${styles.listNavBar}`}>
                            <li className={`nav-item`}>
                                <Link className={`nav-link ${styles.itemNavBar}`} to="/home">SignUp</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link className={`nav-link ${styles.itemNavBar}`} to="/profile">Profile</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link className={`nav-link ${styles.itemNavBar}`} to="/favorite">Favorite</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link className={`nav-link ${styles.itemNavBar}`} to="/cart">Products</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link className={`nav-link ${styles.itemNavBar}`} to="/home">Home</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;