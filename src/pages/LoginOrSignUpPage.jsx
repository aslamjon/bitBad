import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import Login from '../components/Login';
import ApiServices from '../services/api/ApiServices';
import { ToastContainer, toast } from 'react-toastify';


const LoginOrSignUpPage = ({history}) => {
    const notify = (value) => toast.error(`${value}`);
    const [phone_number, setPhoneNumber] = useState('');
    const inputHandling = (e) => {
        setPhoneNumber(e.target.value)
        }
    const submitHandiling = (e) => {
        e.preventDefault();
        const to_reqister = false;
        function multiReplace(str, oldObj, newObj) {
            return str.split(oldObj).join(newObj)
        }
        ApiServices.logInOrSignUp({phone_number: multiReplace(phone_number, ' ' , ''), to_reqister}).then(res => {
            if (res && res.data) {
                const {registered} = res.data;
                if (registered) history.push(`/auth/login/${btoa(phone_number)}`);
                else history.push(`/auth/signup/${btoa(phone_number)}`);
            }
        }).catch(e => {
            console.log(e.response.data.phone_number) 
            if (e.response.status === 400) notify("Raqam to'liq kiritilmagan")
            else notify(`${e.response.data.phone_number}`)
        })
    }
    return (
        <>
            <ToastContainer />
            <Login submitHandiling={submitHandiling} inputValue={phone_number} inputHandling={inputHandling} />
        </>
    )
}

export default withRouter(LoginOrSignUpPage);