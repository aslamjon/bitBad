import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import ApiServices from '../services/api/ApiServices';

import Login from '../components/Login'

const SignUpPage = () => {
    const notify = (value) => toast.error(`${value}`);
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const {phone:phone_number} = useParams();
    
    const inputHandling = (e) => {
        setPhoneNumber(e.target.value)
    }
    const nameHandling = (e) => {
        setName(e.target.value)
        setPhoneNumber(atob(phone_number))
    }

    const submitHandiling = (e) => {
        e.preventDefault()
        // ApiServices.signUp({phone_number:atob(phone_number), code, full_name: name})
    }
    return (
        <>
            <ToastContainer />
            <Login signup submitHandiling={submitHandiling} 
            inputValue={phoneNumber} inputHandling={inputHandling} 
            nameValue={name} nameHandling={nameHandling} />
        </>
    )
}

export default SignUpPage
