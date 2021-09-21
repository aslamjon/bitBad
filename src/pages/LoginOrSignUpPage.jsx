import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Login from '../components/Login';
import ApiServices from '../services/api/ApiServices';
import Loader from '../components/Loader';
import classNames from 'classnames';


const LoginOrSignUpPage = ({history}) => {
    const notify = (value) => toast.error(`${value}`);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandiling = ({phone_number}) => {
        setLoading(true);
        const to_reqister = false;
        function multiReplace(str, oldObj, newObj) {
            return str.split(oldObj).join(newObj)
        }
        phone_number = multiReplace(phone_number, ' ' , '')
        ApiServices.logInOrSignUp({phone_number, to_reqister}).then(res => {
            if (res && res.data) {
                const {registered} = res.data;
                if (registered) history.push(`/auth/login/${btoa(phone_number)}`);
                else history.push(`/auth/signup/${btoa(phone_number)}`);
                setLoading(false);
            }
        }).catch(e => {
            setLoading(false);
            console.log(e.response)
            if (e.response.data.phone_number) notify(`${e.response.data.phone_number}`)
            else notify(`${e.response.data}`)
        })
    }
    return (
        <>
            <ToastContainer />
            <Loader loading={loading}/>
            <Login submitHandiling={handleSubmit(submitHandiling)} 
            register={register('phone_number', { required: true })} 
            className={classNames('test',{ error: errors.phone_number})} />
        </>
    )
}

export default withRouter(LoginOrSignUpPage);