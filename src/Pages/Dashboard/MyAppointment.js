import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://lit-beach-47759.herokuapp.com/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                setAppointments(data)
            });
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3>My appointments: {appointments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.name}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>
                                        {(a.price && !a.paid) &&
                                            <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        {(a.price && a.paid) &&
                                            <span className='text-success'>Pay</span>}
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;