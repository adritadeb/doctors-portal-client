import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AppointmentServices from './AppointmentServices';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentServices date={date} setDate={setDate}></AppointmentServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;