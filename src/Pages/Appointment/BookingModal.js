import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        const treatment = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: email,
            patientName: user.displayName,
            phone
        };

        fetch('https://lit-beach-47759.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(treatment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                setTreatment(null);
            })
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-5'>
                        <input name='date' type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full bg-gray-200">
                            {
                                slots.map((slot, index) => <option className='bg-white'
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full" />
                        <input type="submit"
                            value='Submit' placeholder="Type here" className="btn  w-full uppercase btn-accent text-slate-300" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;