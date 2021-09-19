import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import Title from '../components/Title';

const StyledLoginOrSignUp = styled.div`
    .borderDashed {
        border-bottom: 2px dashed #334D6E;
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


const LoginOrSignUpPage = () => {
    return (
        <StyledLoginOrSignUp>
            <Title title13>Tizimga kirish</Title>
            <p>Telefon raqamingizni kiriting</p>
            <div className="borderDashed"></div>
            <CardStyled>
                <InputOfCardStyled>
                    <span>+998</span>
                    <input type="text" maxLength="7" placeholder="** *** ** **" />
                </InputOfCardStyled>
                <Button>Yuborish</Button>
            </CardStyled>
        </StyledLoginOrSignUp>
    )
}

export default LoginOrSignUpPage
