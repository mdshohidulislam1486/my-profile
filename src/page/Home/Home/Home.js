import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id='overflow-hidden'>
            <Navigation></Navigation>
            <Banner></Banner>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;