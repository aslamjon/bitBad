import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask';
import Button from '../Button';
import Title from '../Title';
import { InputOfCardStyled } from '../Input/InputStyled'
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
    .inputName {
        width: 95%;
        margin-bottom: 10px;
    }
`;

const Login = ({ submitHandiling, register={}, login, signup, className='', phone_number }) => {
    return (
        <StyledLoginOrSignUp onSubmit={submitHandiling}>
            <Title title13>Tizimga kirish</Title>
            { login ? <p>Raqamizga yuborilgan kodni kiriting</p> : signup ? <p>Ismingizni va telefon raqamingizni kiriting</p> : <p>Telefon raqamingizni kiriting</p> }
            <div className="borderDashed"></div>
            <CardStyled>
                {signup ? 
                    <>
                        <InputOfCardStyled className={className.one}>
                            <input placeholder="Ism" {...register('full_name', { required: true})} />
                        </InputOfCardStyled>
                        <InputOfCardStyled className={className.two}>
                            <span>+998</span>
                            <InputMask mask="99 999 99 99" maskChar={null} value={phone_number} {...register('phone_number', { required: true})} disabled/>
                        </InputOfCardStyled>
                    </>
                :   <InputOfCardStyled className={className}>
                    {login || signup ? '' : <span>+998</span>}
                    {login ? 
                        <InputMask mask="999-999" maskChar={null} placeholder={"**-**-**"} {...register('code', { required: true})} />
                    : signup ? 
                        ''
                    : <InputMask mask="99 999 99 99" maskChar={null} placeholder={"** *** ** **"} {...register} />
                    }
                    </InputOfCardStyled>
                }
                <Button>{login ? "Kirish" : "Yuborish"}</Button>
            </CardStyled>
        </StyledLoginOrSignUp>
    )
}
export default Login;