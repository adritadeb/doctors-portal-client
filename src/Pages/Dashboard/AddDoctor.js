import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading, } = useQuery('services', () =>
        fetch('https://lit-beach-47759.herokuapp.com/service')
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    const imgStorage_key = '91a0e4f473519a0cef4c450b10851ccc';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    fetch('https://lit-beach-47759.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                console.log(inserted)
                            }
                            else {
                                toast.error('Failed to add doctor')
                            }
                        })
                }
            })
    };

    return (
        <div>
            <h2 className='text-2xl'>Add a new Doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                    <label className='label'>
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })} />
                    <label className='label'>
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register('speciality')} className="select select-bordered w-full first-line:max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })} />
                    <label className='label'>
                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-500 mt-10 '>{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn text -slate-400 w-full max-w-xs' value='Add' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;