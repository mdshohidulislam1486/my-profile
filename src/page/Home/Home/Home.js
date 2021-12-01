import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;