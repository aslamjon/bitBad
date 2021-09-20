import React from 'react'
import styled from 'styled-components'

import Button from '../Button';
import Input from '../Input';
import Title from '../Title';

const StyledLoginOrSignUp = styled.form`
    .borderDashed {
        border-bottom: 2px dashed #334D6E;
        margin: 18px 0 14px 0;
    }
    p {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }
`;
const CardStyled = styled.div`
    background: #BFCCDD;
    border-radius: 15px;
    padding: 34px 20px 23px 19px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: 20px;
    }
`;

const Login = ({ submitHandiling, inputValue="", inputHandling = () => {}, nameValue = "", nameHandling = () => {}, login, signup }) => {
    return (
        <StyledLoginOrSignUp onSubmit={submitHandiling}>
            <Title title13>Tizimga kirish</Title>
            { login ? <p>Raqamizga yuborilgan kodni kiriting</p> : signup ? <p>Ismingizni va telefon raqamingizni kiriting</p> : <p>Telefon raqamingizni kiriting</p> }
            <div className="borderDashed"></div>
            <CardStyled>
                {login ? 
                    <Input login placeholder="******" length="6" inputValue={inputValue} changeValue={inputHandling} /> 
                : signup ? 
                    <>
                        <Input signup placeholder="Ism" inputValue={nameValue} changeValue={nameHandling} />
                        <Input length={9} inputValue={inputValue} changeValue={inputHandling} />
                    </>
                : <Input length={9} inputValue={inputValue} changeValue={inputHandling} />
                }
                <Button>{login ? "Kirish" : "Yuborish"}</Button>
            </CardStyled>
        </StyledLoginOrSignUp>
    )
}
export default Login;