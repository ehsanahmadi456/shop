import React from 'react';

import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.container}>
            <span className={`spinner-grow ${styles.spinner}`}></span>
        </div>
    );
};

export default Loader;