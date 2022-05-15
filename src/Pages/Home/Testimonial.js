import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, place } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-14">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis exercitationem labore cupiditate sequi nihil quas delectus magnam aperiam vitae ea molestias nobis voluptatum Necessitatibus.</p>
                <div className='flex items-center mt-4'>
                    <div className='border-2 rounded-full border-primary'>
                        <img className='w-20 p-1' src={img} alt="" />
                    </div>
                    <div className='ml-4'>
                        <h2 className="card-title">{name}</h2>
                        <h2>{place}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;