import React, {useState} from 'react'
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';
import ApiServices from '../services/api/ApiServices';
import Login from '../components/Login/Login'
import { setCurrentUser } from '../redux/user/userAction';
import { createStructuredSelector } from 'reselect';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = ({history, setCurrentUser}) => {
    const notify = (value) => toast.error(`${value}`);
    const [code, setCode] = useState('')
    const {phone:phone_number} = useParams();

    const inputHandling = (e) => {
        setCode(e.target.value)
    }
    const submitHandiling = (e) => {
        e.preventDefault()
        ApiServices.login({phone_number:atob(phone_number), code}).then(res => {
            if (res.data.token) {
                setCurrentUser(res.data)
                history.push('/dashboard')
            }
            return res
        }).catch(e => {
            console.log(e.status);
            notify("Xatolik mavjud yoki Maxfiy raqamning amal qilish muddati tugagan")
        });
    }
    return (
        <>  
            <ToastContainer />
            <Login login submitHandiling={submitHandiling} inputValue={code} inputHandling={inputHandling} />
        </>
    )
}


const mapStateToProps = createStructuredSelector({

})

const mapDispathToProps = dispatch => ({
    setCurrentUser: value => dispatch(setCurrentUser(value)),
})

export default connect(mapStateToProps, mapDispathToProps)(LoginPage);
