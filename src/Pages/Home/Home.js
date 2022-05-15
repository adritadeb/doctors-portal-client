import React from 'react';
import HomeAppointment from './HomeAppointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import ServicesBanner from './ServicesBanner';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServicesBanner></ServicesBanner>
            <HomeAppointment></HomeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;