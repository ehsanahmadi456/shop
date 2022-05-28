import React from 'react';

// Image
import img2 from "../../assets/images/img2.png";
import wave from "../../assets/images/wave.svg"

// Styles
import styles from "./Footer.module.scss";

const Footer = () => {

    const upHandler = () => {
        window.scroll(0, 0)
    }

    return (
        <div className={styles.container}>
            <div className={styles.topFooter}>
                <div className={styles.aboutUs}>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repellendus sequi amet magnam assumenda culpa, optio quis neque perferendis rerum distinctio, voluptates </p>
                </div>
                <div className={styles.communic}>
                    <h3>Ways of communication</h3>
                    <ul>
                        <li>address: Iran, Tehran</li>
                        <li>Email: Ehsanahmadi8338@gmail.com</li>
                        <li>phone: 09213456789</li>
                        <li>phone: 09213456789</li>
                    </ul>
                </div>
                <div className={styles.services}>
                    <h3>customer services</h3>
                    <ul>
                        <li>Frequently Asked Questions</li>
                        <li>contact us</li>
                        <li>about us</li>
                        <li>Return the product</li>
                    </ul>
                </div>
                <div className={styles.footerImage}>
                    <div className={styles.trustImage}>
                        <img src={img2} alt="footer img" />
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="#">
                            <i className="fa-brands fa-instagram text-light"></i>
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-paper-plane text-light"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-whatsapp text-light"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <img className={styles.waveFooter} src={wave} alt="wave footer" />
                <span className={styles.toUp} onClick={upHandler}>
                    <i className={styles.iconTop} className="fa-solid fa-chevron-up"></i>
                </span>
            </div>
        </div>
    );
};

export default Footer;