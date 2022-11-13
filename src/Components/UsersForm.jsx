import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUser, userSelected, deselectUser, userDelected }) => {
    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        if (userSelected !== null) {
            reset(userSelected)
        } else {
            reset({
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: ""

            })
        }
    }, [userSelected])


    const submit = (data) => {
        //console.log(data)
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => {
                    getUser()
                    deselectUser();
                })
                .catch(error => console.log(error.response?.data))
        } else {
            axios.post("https://users-crud1.herokuapp.com/users/", data)
                .then(() => getUser())
                .catch(error => console.log(error.response?.data))
        }


    }
    return (
        <form className='User-Form'
            onSubmit={handleSubmit(submit)}>
                <h1>New User</h1>
            <div className='input-card'>
                <label htmlFor="email"> <i className='bx bx-envelope Form' ></i> </label>
                <input {...register("email")} type="text" id='email' placeholder='Email'/>
            </div>
            <div className="input-car">
                <label htmlFor="password"> <i className='bx bx-lock-alt Form' ></i> </label>
                <input {...register("password")} type="password" id='password' placeholder='Password'/>
            </div>
            <div className="input-car-name">
                <label htmlFor="first_name"> <i className='bx bxs-user Form' ></i> </label>
                <input {...register("first_name")} type="text" id='first_name'placeholder='Name'/>
            
                <label htmlFor="last_name"> </label>
                <input {...register("last_name")} type="text" id='last_name' placeholder='Last Name' />
            </div>
            <div className="input-car">
                <label htmlFor="birthday"> <i className='bx bx-cake Form' ></i></label>
                <input {...register("birthday")} type="date" id='birthday'/>
            </div>
            <button className='Button-Submit'>Submit</button>


        </form>
    );
};

export default UsersForm;