import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import ApiServices from '../services/api/ApiServices';
import Loader from '../components/Loader';
import Login from '../components/Login'

const SignUpPage = () => {
    const notify = (value) => toast.error(`${value}`);
    const { phone: phone_number } = useParams();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const submitHandiling = ({full_name}) => {
        setLoading(true)
        ApiServices.signUp({phone_number:atob(phone_number), full_name}).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e.response)
            if (e.response.code) notify(e.response.code)
        })
        setLoading(false)
    }
    console.log(errors)
    return (
        <>
            <ToastContainer />
            <Loader loading={loading} />
            <Login signup submitHandiling={handleSubmit(submitHandiling)}
                register={register} className={{
                    one: classNames('full_name',{ error: errors.full_name}),
                    two: classNames('test',{ error: errors.phone_number}),
                }}
                phone_number={atob(phone_number)}
                />
        </>
    )
}

export default SignUpPage
