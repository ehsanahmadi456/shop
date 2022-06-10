import React from 'react';

// Components
import Store from './Store';
import Main from './shared/Main';
import HeadMain from './shared/HeadMain';

const Home = () => {
    return (
        <div>
            <HeadMain />
            <Store />
            <Main />
        </div>
    );
};

export default Home;