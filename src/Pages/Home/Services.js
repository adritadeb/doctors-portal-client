import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        { id: 1, img: fluoride, title: 'Fluoride Treatment' },
        { id: 2, img: cavity, title: 'Cavity Filling' },
        { id: 3, img: whitening, title: 'Teeth Whitening' }
    ]

    return (
        <div className='px-12'>
            <div className='py-24'>
                <h3 className='uppercase text-center font-bold text-secondary'>Our Services</h3>
                <h2 className='text-center text-3xl font-normal'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;