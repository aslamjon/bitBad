import React from 'react'
import InputMask from 'react-input-mask';
import { InputOfCardStyled } from './InputStyled'


const Input = ({ length, placeholder, login = '', signup = '', phone = false, className = '', ...otherProps }) => {
    return (
        <InputOfCardStyled className={`${className} ${signup ? 'inputName' : ''}`}>
            {login || signup ? '' : <span>+998</span>}
            {phone ? <InputMask mask="99 999 99 99" maskChar={null} placeholder={placeholder ? placeholder : "** *** ** **"} {...otherProps} />
                : <input type="text" maxLength={length ? `${length}` : "12"} placeholder={placeholder ? placeholder : "** *** ** **"} {...otherProps} />}
        </InputOfCardStyled>
    )
}

export default Input;
