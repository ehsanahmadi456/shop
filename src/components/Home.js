import React from 'react';

// Components
import Navbar from './shared/Navbar';
import Store from './Store';
import Footer from './shared/Footer';
import Main from './shared/Main';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Store />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;