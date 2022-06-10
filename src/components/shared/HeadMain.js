import React from 'react';

// Images
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner2res from "../../assets/images/banner2res.jpg";
import brands1 from "../../assets/images/b-1.png";
import brands2 from "../../assets/images/b-2.png";
import brands3 from "../../assets/images/b-3.png";
import brands4 from "../../assets/images/b-4.png";
import brands5 from "../../assets/images/b-5.png";
import brands6 from "../../assets/images/b-6.png";
import mainImage1 from "../../assets/images/mainImage1.jpg";
import mainImage2 from "../../assets/images/mainImage2.jpg";
import mainImage3 from "../../assets/images/mainImage3.jpg";

// Sltyes
import styles from "./HeadMain.module.scss";

// SlickSlider
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeadMain = () => {

    return (
        <div className={styles.container}>
            <div className={styles.bannerMain}>
                <img className={styles.banner1} src={banner1} alt="" />
                <img className={styles.banner2} src={banner2} alt="" />
                <img className={styles.banner2res} src={banner2res} alt="" />
            </div>
            <Slider 
            className={styles.sliderBrands}
            dots={false}
            slidesToShow={5}
            slidesToScroll={2}
            autoplay={true}
            autoplaySpeed={3000}
            responsive= {[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                    slidesToScroll: 1
                  }
                }
              ]}
            >
                <div className={styles.sliderItems}>
                    <img src={brands1} alt="" />
                </div>
                <div className={styles.sliderItems}>
                    <img src={brands2} alt="" />
                </div>
                <div className={styles.sliderItems}>
                    <img src={brands3} alt="" />
                </div>
                <div className={styles.sliderItems}>
                    <img src={brands4} alt="" />
                </div>
                <div className={styles.sliderItems}>
                    <img src={brands5} alt="" />
                </div>
                <div className={styles.sliderItems}>
                    <img src={brands6} alt="" />
                </div>
            </Slider>
            <div className={styles.mainCard}>
                <div className={styles.itemCard}>
                    <img src={mainImage3} alt="" />
                    <div className={styles.aboutCard}>
                        <p className={styles.itemOne}>Game and accessories</p>
                        <span className={styles.itemOne}>Lets to play game</span>
                        <button className={styles.btnOne}>View</button>
                    </div>
                </div>
                <div className={styles.itemCard}>
                    <img src={mainImage2} alt="" />
                    <div className={styles.aboutCard}>
                        <p className={styles.itemTwo}>Smart products</p>
                        <span className={styles.itemTwo}>Be attractive with these products</span>
                        <button className={styles.btnTwo}>View</button>
                    </div>
                </div>
                <div className={styles.itemCard}>
                    <img src={mainImage1} alt="" />
                    <div className={styles.aboutCard}>
                        <p className={styles.itemThree}>toys</p>
                        <span className={styles.itemThree}>Cute tools for Entertainment</span>
                        <button className={styles.btnThree}>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadMain;