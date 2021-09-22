import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const AuthStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .authCard {
        padding: 22px 25px 29px 18px;
        background: #99CF67;
        border-radius: 15px;
    }
`;
const LinkStyled = styled(Link)`
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #F4F3F3;
    text-decoration-line: underline;
    margin-top: 14px;
    display: inline-block;
`;

const AuthLayout = ({children, props}) => {
    return (
        <AuthStyled>
            <div className="authCard">
                {children}
                <LinkStyled to="/auth/login-or-signup" >Ro'yxatdan o'tmaganmisiz?</LinkStyled>
            </div>
        </AuthStyled>
    )
}

export default AuthLayout
