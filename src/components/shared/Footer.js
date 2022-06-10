import React from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Image
import img2 from "../../assets/images/img2.png";
import wave from "../../assets/images/wave.svg";

// Svg
import instagram from "../../assets/icons/instagram.svg";
import paperPLane from "../../assets/icons/paper-plane.svg";
import whatsApp from "../../assets/icons/whatsapp.svg";

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
                    <img className={styles.securityImage} src={img2} alt="footer img" />
                    <div className={styles.socialIcons}>
                        <div>
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div>
                            <img src={paperPLane} alt="paperPLane" />
                        </div>
                        <div>
                            <img src={whatsApp} alt="whatsApp" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <img className={styles.waveFooter} src={wave} alt="wave footer" />
                <span className={styles.toUp} onClick={upHandler}>
                    <FontAwesomeIcon className={styles.iconTop} icon={faAngleUp} />
                </span>
            </div>
        </div>
    );
};

export default Footer;