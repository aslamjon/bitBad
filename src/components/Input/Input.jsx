import React from 'react'
import styled from 'styled-components';

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

const Input = ({ inputValue, changeValue, length, placeholder, login='', signup='' }) => {
    return (
        <InputOfCardStyled>
            {login || signup ? '' : <span>+998</span>}
            <input type="text" maxLength={length ? `${length}` : "12"} placeholder={placeholder ? placeholder : "** *** ** **"} value={inputValue} onChange={changeValue} />
        </InputOfCardStyled>
    )
}

export default Input
