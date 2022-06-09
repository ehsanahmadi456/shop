import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "./Profile.module.scss";

// Images
import profileMan from "../../assets/images/image-profile.jpg";
import squire from "../../assets/images/squire.svg";
import check from "../../assets/images/check.png";
import remove from "../../assets/images/remove.png";

const Profile = () => {
    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage1} src={squire} alt="" />
            <img className={styles.backgroundImage2} src={squire} alt="" />
            <img className={styles.backgroundImage3} src={squire} alt="" />
            <div className={styles.profile}>
                <div className={styles.profileUser}>
                    <img src={profileMan} alt="" />
                </div>
                <div className={styles.aboutUser}>
                    <p>My Profile</p>
                    <p>Iran, tehran, azadi</p>
                </div>
                <div className={styles.numberUser}>
                    <p>Sina Mohammadi</p>
                    <p>+98 912 345 6789</p>
                </div>
                <p className={styles.emailUser}>@sinamohammadi83@gmail.com</p>
                <div className={styles.smsProfile}>
                    <p>SMS alerts activations</p>
                    <img className={styles.available} src={check} alt="" />
                </div>
                <div className={styles.footerProfile}>
                    <button className={styles.buttonProfile}>Save</button>
                </div>
            </div>
            <div>
                <div className={styles.history}>
                    <div className={styles.headHistory}>
                        <p>My accounts</p>
                        <button>edit</button>
                    </div>
                    <div className={styles.firstInformation}>
                        <div className={styles.items}>
                            <div>
                                <div className={styles.headItems}>
                                    <p>shop products</p>
                                </div>
                                <div className={styles.mainItems}>
                                    <p>you can select products</p>
                                </div>
                            </div>
                            <div className={styles.acceptLink}>
                                <Link to="/home">Go to Shop</Link>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div>
                                <div className={styles.headItems}>
                                    <p>shop products</p>
                                </div>
                                <div className={styles.mainItems}>
                                    <p>you can select products</p>
                                </div>
                            </div>
                            <div className={styles.receiveLink}>
                                <Link to="/home">Go to Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.connection}>
                    <div className={styles.secondInformation}>
                        <div className={styles.headInformation}>
                            <p>My access</p>
                            <button>Filter By</button>
                        </div>
                        <div className={styles.mainInformation}>
                            <div className={styles.itemMainInformation}>
                                <div className={styles.leftItem}>
                                    <img className={styles.available} src={check} alt="" />
                                    <p>phone call</p>
                                </div>
                                <div className={styles.acceptLink}>
                                    <a>accept</a>
                                </div>
                            </div>
                            <div className={styles.itemMainInformation}>
                                <div className={styles.leftItem}>
                                    <img className={styles.available} src={remove} alt="" />
                                    <p>whats app</p>
                                </div>
                                <div className={styles.receiveLink}>
                                    <a>receive</a>
                                </div>
                            </div>
                            <div className={styles.itemMainInformation}>
                                <div className={styles.leftItem}>
                                    <img className={styles.available} src={check} alt="" />
                                    <p>phone call</p>
                                </div>
                                <div className={styles.acceptLink}>
                                    <a>accept</a>
                                </div>
                            </div>
                            <div className={styles.itemMainInformation}>
                                <div className={styles.leftItem}>
                                    <img className={styles.available} src={check} alt="" />
                                    <p>phone call</p>
                                </div>
                                <div className={styles.acceptLink}>
                                    <a>accept</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;