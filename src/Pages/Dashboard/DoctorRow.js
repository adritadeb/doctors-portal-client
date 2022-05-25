import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, speciality, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;