import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import ApiServices from '../services/api/ApiServices';
import Login from '../components/Login/Login'

const LoginPage = ({history}) => {
    const [code, setCode] = useState('')
    const {phone:phone_number} = useParams();

    const inputHandling = (e) => {
        setCode(e.target.value)
    }
    const submitHandiling = (e) => {
        e.preventDefault()
        ApiServices.login({phone_number:atob(phone_number), code}).then(res => {
            console.log(res.token)
            console.log(res.user)
            console.log(res.is_admin)
            if (res.token) history.push('/dashboard')
        }).code(e => console.log(e));
    }
    return (
        <Login login submitHandiling={submitHandiling} inputValue={code} inputHandling={inputHandling} />
    )
}

export default LoginPage;
