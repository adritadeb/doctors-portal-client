import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, place } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-14">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis exercitationem labore cupiditate sequi nihil quas delectus magnam aperiam vitae ea molestias nobis voluptatum Necessitatibus.</p>
                <div className='flex items-center mt-4'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
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