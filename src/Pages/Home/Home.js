import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import ServicesBanner from './ServicesBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServicesBanner></ServicesBanner>
        </div>
    );
};

export default Home;