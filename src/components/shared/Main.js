import React from 'react';

// Images
import logo from "../../assets/images/logo.png";
import image1 from "../../assets/images/img1.svg";
import productImage from "../../assets/images/productImage.png";
import small1 from "../../assets/images/small1.svg";
import small2 from "../../assets/images/small2.svg";
import small3 from "../../assets/images/small3.svg";

// Logo
import paperPlane from "../../assets/icons/paperPlane.svg";
import message from "../../assets/icons/message.svg";
import star from "../../assets/icons/star.svg";
import security from "../../assets/icons/security.svg";

// Styles
import styles from "./Main.module.scss";

// SlickSlider
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sedonaContainer}>
                <div className={styles.sedona}>
                    <img className={styles.smallImg} aria-hidden src={small1} alt="image small1" />
                    <img className={styles.smallImg} aria-hidden src={small2} alt="image small2" />
                    <img className={styles.smallImg} aria-hidden src={small3} alt="image small3" />
                    <div className={styles.left}>
                        <img src={productImage} alt="" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.aboutSedona}>
                            <h3>About Sedona</h3>
                            <p>Lorem ipsum dolor Totam sapiente blanditiis voluptatem veniam ipsa obcaecati. Commodi corrupti deleniti molestias consequatur facilis illo totam magnam tenetur aliquam. Commodi corrupti deleniti molestias consequatur.</p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerSlider}>
                <Slider 
                className={styles.slider}
                dots={false}
                slidesToShow={4}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                responsive= {[
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2
                    }
                    }
                ]}
                >
                    <div className={styles.itemSlider}>
                        <img src={security} alt="icon" />
                        <div className={styles.aboutIcon}>
                            <p>Secure payment</p>
                            <p>With secure internet portal</p>
                        </div>
                    </div>
                    <div className={styles.itemSlider}>
                        <img src={paperPlane} alt="icon" />
                        <div className={styles.aboutIcon}>
                            <p>Fast delivery</p>
                            <p>To all parts of Iran</p>
                        </div>
                    </div>
                    <div className={styles.itemSlider}>
                        <img src={message} alt="icon" />
                        <div className={styles.aboutIcon}>
                            <p>24hour support</p>
                            <p>Ready to answer questions</p>
                        </div>
                    </div>
                    <div className={styles.itemSlider}>
                        <img src={security} alt="icon" />
                        <div className={styles.aboutIcon}>
                            <p>Secure payment</p>
                            <p>With secure internet portal</p>
                        </div>
                    </div>
                    <div className={styles.itemSlider}>
                        <img src={star} alt="icon" />
                        <div className={styles.aboutIcon}>
                            <p>Product warranty</p>
                            <p>Completely original products</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className={styles.beautyImage}>
                <img className={styles.imageMain} aria-hidden alt="image" src={logo} />
                <img className={styles.imageDemo} aria-hidden alt="image" src={image1} />
            </div>
        </div>
    );
};

export default Main;