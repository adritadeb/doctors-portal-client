import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';

const AppointmentServices = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);

    return (
        <div className='px-12 py-20'>
            <h3 className='text-center font-semibold text-secondary text-xl'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 pt-14'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                    ></AppointmentService>)
                }
            </div>
        </div>
    );
};

export default AppointmentServices;