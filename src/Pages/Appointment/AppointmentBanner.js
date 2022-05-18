import React from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} class="hero min-h-screen px-2">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-md rounded-lg shadow-2xl ml-20" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;