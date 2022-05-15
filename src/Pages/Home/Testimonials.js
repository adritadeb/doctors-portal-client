import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            img: people1,
            name: 'Winson Herry',
            place: 'California'
        },
        {
            id: 2,
            img: people2,
            name: 'Winson Herry',
            place: 'California'
        },
        {
            id: 3,
            img: people3,
            name: 'Winson Herry',
            place: 'California'
        }
    ]

    return (
        <div className='px-12'>
            <h3 className='text-secondary font-bold'>Testimonial</h3>
        </div>
    );
};

export default Testimonials;