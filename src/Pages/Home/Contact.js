import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div class="hero" style={{ backgroundImage: `url(${appointment})`, height: '533px' }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h3 class="mb-2 text-xl font-bold text-secondary">Contact Us</h3>
                    <h1 class="mb-5 text-3xl text-white">Stay connected with us</h1>
                    <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs mb-3" />
                    <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs mb-3" />
                    <textarea class="textarea textarea-bordered w-80 mb-5 h-28" placeholder="Your message"></textarea>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary block mx-auto w-32">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;