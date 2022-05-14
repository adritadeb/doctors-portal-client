import React from 'react';

const Service = ({ service }) => {
    const { img, title } = service;
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;