import React from 'react';

// Components
import Store from './Store';
import Main from './shared/Main';
import HeadMain from './shared/HeadMain';

// Styles
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <HeadMain />
            <Store />
            <Main />
        </div>
    );
};

export default Home;