import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
    background: #398739;
    border-radius: 15px;
    border: none;
    outline: none;
    color: #fff;
    padding: 6px 20px;
    cursor: pointer;
    ${({shadow}) => shadow && css`
        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
    `}
`;
const Button = (props) => {
    return <ButtonStyled {...props} />
}

export default Button;
