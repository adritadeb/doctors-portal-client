import React from 'react';

const Service = ({ service }) => {
    const { img, title } = service;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl py-5">
                <figure>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title mx-auto">{title}</h2>
                    <p className='text-center'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;