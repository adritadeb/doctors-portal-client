import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ServicesBanner = () => {
    return (
        <div className="hero min-h-screen md:mx-24 ml-7 mt-14 w-11/12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='md:pl-20 md:pt-0 pl-7 pt-7'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;