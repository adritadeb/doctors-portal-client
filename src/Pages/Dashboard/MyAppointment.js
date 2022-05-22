import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3>My appointments: {appointments.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.name}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;