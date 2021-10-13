import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import ApiServices from '../services/api/ApiServices';
import Loader from '../components/Loader';
import Login from '../components/Login'

const SignUpPage = () => {
    const history = useHistory()
    const notify = (value) => toast.error(`${value}`);
    const { phone } = useParams();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const phone_number = atob(phone)

    const submitHandiling = (data) => {
        setLoading(true)
        const {full_name} = data;
        ApiServices.loginOrSignUp({phone_number, to_register: 1}).then(res => {
            if (res && res.data) {
                history.push(`/auth/confirm/${btoa(phone_number)}/${btoa(full_name)}`);
            }
        }).catch(e => {
            console.log(e.response)
            if (e.response.code) notify(e.response.code)
        })
        setLoading(false)
    }
    return (
        <>
            <ToastContainer />
            <Loader loading={loading} />
            <Login signup submitHandiling={handleSubmit(submitHandiling)}
                register={register} className={{
                    one: classNames('full_name',{ error: errors.full_name}),
                    two: classNames('test',{ error: errors.phone_number}),
                }}
                phone_number={phone_number}
                />
        </>
    )
}

export default SignUpPage
