import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { user } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="shipping-container">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Hello this is Shipping</h1>

                <p>Name:</p>
                <input className="shipping-input" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Type your name here" /> <br />

                <p>E-mail:</p>
                <input defaultValue={user?.email} className="shipping-input" {...register("email", { required: true })} placeholder="Type your e-mail here" /> <br />

                <p>Password:</p>
                <input className="shipping-input" {...register("password", { required: true })} placeholder="Type your password here" type="password" /> <br />


                {errors.email && <span className="error">This field is required</span>} <br />
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;