import React from 'react';

const AppointmentService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg mx-auto shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length
                        ?
                        <span>{slots[0]}</span> :
                        <span className='text-red-500'>Try another date</span>
                }</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions">
                    <button disabled={slots.length === 0} class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;