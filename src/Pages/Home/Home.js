import React from 'react';
import HomeAppointment from './HomeAppointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import ServicesBanner from './ServicesBanner';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';

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
            <Footer></Footer>
        </div>
    );
};

export default Home;