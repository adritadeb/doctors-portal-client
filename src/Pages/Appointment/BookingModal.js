import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const date = event.target.date.value;
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        const newBooking = { date, slot, name, email, phone };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                alert('Booking confirmed');
                setTreatment(null);
            })
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal-3" class="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                    <label for="booking-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-5'>
                        <input name='date' type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full bg-gray-200">
                            {
                                slots.map(slot => <option className='bg-white' value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit"
                            value='Submit' placeholder="Type here" className="btn  w-full uppercase btn-accent text-slate-300" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;