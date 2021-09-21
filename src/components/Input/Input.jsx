import React from 'react'
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const InputOfCardStyled = styled.div`
    background: #F0F0F0;
    border-radius: 15px;
    padding: 13px 11px;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #929FAF;
    input {
        border: none;
        outline: none;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #929FAF;
        background: none;
        padding-left: 5px;
    }
`;

const Input = ({ inputValue, changeValue, length, placeholder, login = '', signup = '', phone = false }) => {
    return (
        <InputOfCardStyled className={signup ? 'inputName' : ''}>
            {login || signup ? '' : <span>+998</span>}
            {phone ? <InputMask mask="99 999 99 99" maskChar={null} placeholder={placeholder ? placeholder : "** *** ** **"} value={inputValue} onChange={changeValue} />
                : <input type="text" maxLength={length ? `${length}` : "12"} placeholder={placeholder ? placeholder : "** *** ** **"} value={inputValue} onChange={changeValue} />}

        </InputOfCardStyled>
    )
}

export default Input
