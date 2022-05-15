import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';

const HomeAppointment = () => {
    return (
        <div className="hero my-12 w-full" style={{ backgroundImage: `url(${appointment})`, height: '460px' }}>
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <div className='mt-20 md:mt-0'>
                    <h3 className='font-bold text-secondary mb-5'>Appointment</h3>
                    <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <img src={doctorSmall} className="hidden lg:block md:mb-12 mb-52 mt-[-200px]" alt='' />
            </div>
        </div>
    );
};

export default HomeAppointment;