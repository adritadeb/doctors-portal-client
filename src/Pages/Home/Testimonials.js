import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Testimonial from './Testimonial';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            place: 'California'
        },
        {
            _id: 2,
            img: people2,
            name: 'Winson Herry',
            place: 'California'
        },
        {
            _id: 3,
            img: people3,
            name: 'Winson Herry',
            place: 'California'
        }
    ]

    return (
        <div className='px-12 pb-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary font-bold text-xl'>Testimonial</h3>
                    <h2 className='text-3xl mb-24'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                {
                    reviews.map(review => <Testimonial
                        key={review._id}
                        review={review}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;