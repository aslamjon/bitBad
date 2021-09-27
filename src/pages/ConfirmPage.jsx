import React, {useState} from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import classNames from 'classnames';

import ApiServices from '../services/api/ApiServices';
import Login from '../components/Login/Login'
import { setCurrentToken, } from '../redux/user/userAction';
import Loader from '../components/Loader';

const ConfirmPage = ({history, setCurrentToken}) => {
    const notify = (value) => toast.error(`${value}`);
    const [loading, setLoading] = useState(false);
    const {phone:phone_number, full_name} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submitHandiling = ({code}) => {
        setLoading(true)
        code = code.split('-').join('');
        ApiServices.signUp({phone_number:atob(phone_number), code, full_name:atob(full_name)}).then(res => {
            if (res.data.token) {
                setCurrentToken(res.data.token)
                history.push('/dashboard')
            }
            return res
        }).catch(e => {
            if (e.response.data.code) notify(e.response.data.code[0]);
            else if (e.response.data) notify(e.response.data)
            else notify("Xatolik mavjud yoki Maxfiy raqamning amal qilish muddati tugagan")
        });
        setLoading(false)
    }
    return (
        <>  
            <ToastContainer />
            <Loader loading={loading}/>
            <Login login submitHandiling={handleSubmit(submitHandiling)} 
            register={register} className={classNames({error: !!errors.code})} />
        </>
    )
}


const mapStateToProps = createStructuredSelector({

})

const mapDispathToProps = dispatch => ({
    setCurrentToken: value => dispatch(setCurrentToken(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(ConfirmPage);
