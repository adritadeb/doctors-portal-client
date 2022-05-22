import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AppointmentServices = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-12 py-20'>
            <h3 className='text-center font-semibold text-secondary text-xl'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 pt-14'>
                {
                    services?.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}></BookingModal>}
            </div>
        </div>
    );
};

export default AppointmentServices;